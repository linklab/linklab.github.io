# 2026 Fall Deep Learning Course Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a 2026 Fall Deep Learning & Practice page copied from the 2025 Fall page and link it from the Courses page without changing the 2025 course.

**Architecture:** Follow the repository's existing year/semester course-page convention. Create an independent 2026 semester-2 Markdown page, change only its permalink and displayed year, and enable the existing 2026 Fall menu block with the new URL.

**Tech Stack:** Jekyll 4.3.3, Markdown with YAML front matter, embedded HTML, Bundler

## Global Constraints

- Preserve `main/b_courses/2025/2/deep_learning.markdown` unchanged.
- Preserve every schedule entry, course link, notice, and resource in the copied page.
- Use `/courses/2026/2/dl` for the new page.
- Display `Fall Semester, 2026` in the new page heading.
- Do not perform unrelated refactoring.

---

### Task 1: Add and expose the 2026 Fall course

**Files:**
- Create: `main/b_courses/2026/2/deep_learning.markdown`
- Modify: `main/z_menu/03_courses.markdown:10-22`
- Verify: `_site/courses/2026/2/dl/index.html`

**Interfaces:**
- Consumes: Jekyll page discovery through YAML front matter and the existing `/courses/` navigation page.
- Produces: A generated `/courses/2026/2/dl` page and a 2026 Fall Courses entry pointing to it.

- [ ] **Step 1: Record the original 2025 page checksum**

Run:

```bash
shasum -a 256 main/b_courses/2025/2/deep_learning.markdown
```

Expected: one SHA-256 checksum followed by the 2025 source path. Save the checksum for Step 7.

- [ ] **Step 2: Copy the existing course into the 2026 Fall directory**

Run:

```bash
mkdir -p main/b_courses/2026/2
cp main/b_courses/2025/2/deep_learning.markdown main/b_courses/2026/2/deep_learning.markdown
```

Expected: `main/b_courses/2026/2/deep_learning.markdown` exists and initially matches the 2025 source byte-for-byte.

- [ ] **Step 3: Update only the copied page identity**

In `main/b_courses/2026/2/deep_learning.markdown`, make exactly these replacements:

```diff
-permalink: /courses/2025/2/dl
+permalink: /courses/2026/2/dl
```

```diff
-Deep Learning and Practice (딥러닝및실습) - CSE533, Fall Semester, 2025
+Deep Learning and Practice (딥러닝및실습) - CSE533, Fall Semester, 2026
```

- [ ] **Step 4: Verify that the copied page has no other content changes**

Run:

```bash
diff -u main/b_courses/2025/2/deep_learning.markdown main/b_courses/2026/2/deep_learning.markdown
```

Expected: exactly two changed lines—the permalink and heading year.

- [ ] **Step 5: Enable and correct the 2026 Fall Courses entry**

In `main/z_menu/03_courses.markdown`, remove the comment markers surrounding the existing 2026 Fall block and change its link:

```html
<h4 class="course_season text-right">[Fall]</h4>
<ol class="study">
    <li>
        <strong>Deep Learning & Practice</strong>
        <a href="/courses/2026/2/dl" target="_blank">
            <i class="fa fa-link" aria-hidden="true"></i>
        </a>
    </li>
</ol>
```

Keep the existing 2026 Spring and all 2025 entries unchanged.

- [ ] **Step 6: Build the Jekyll site**

Run:

```bash
bundle exec jekyll build
```

Expected: exit code 0 and `_site/courses/2026/2/dl/index.html` is generated.

- [ ] **Step 7: Verify old and new pages and navigation**

Run:

```bash
shasum -a 256 main/b_courses/2025/2/deep_learning.markdown
test -f _site/courses/2025/2/dl/index.html
test -f _site/courses/2026/2/dl/index.html
rg -n 'Fall Semester, 2026' _site/courses/2026/2/dl/index.html
rg -n '/courses/2026/2/dl' _site/courses/index.html
git diff --check
```

Expected:

- The 2025 checksum matches Step 1.
- Both generated course pages exist.
- The new page contains `Fall Semester, 2026`.
- The Courses page links to `/courses/2026/2/dl`.
- `git diff --check` reports no errors.

- [ ] **Step 8: Commit the implementation**

Run:

```bash
git add main/b_courses/2026/2/deep_learning.markdown main/z_menu/03_courses.markdown
git commit -m "feat: add 2026 fall deep learning course"
```

Expected: one implementation commit containing only the new course page and Courses menu change.
