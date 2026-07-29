# 2026 Fall Deep Learning Course Design

## Goal

Add a 2026 Fall “Deep Learning & Practice” course while preserving the existing
2025 Fall course and all of its content.

## Changes

1. Copy `main/b_courses/2025/2/deep_learning.markdown` to
   `main/b_courses/2026/2/deep_learning.markdown`.
2. In the copied file only:
   - Change the permalink from `/courses/2025/2/dl` to `/courses/2026/2/dl`.
   - Change the heading year from `Fall Semester, 2025` to
     `Fall Semester, 2026`.
   - Preserve every other schedule entry, course link, notice, and resource.
3. In `main/z_menu/03_courses.markdown`:
   - Enable the existing 2026 Fall course block.
   - Keep the label `Deep Learning & Practice`.
   - Point its link to `/courses/2026/2/dl`.
4. Do not modify the 2025 course page or its menu entry.

## Verification

- Confirm the new source file exists and differs from the 2025 source only in
  its permalink and displayed year.
- Build the Jekyll site successfully.
- Confirm `/courses/` contains both the 2025 and 2026 Fall entries.
- Confirm `/courses/2026/2/dl` is generated and the link resolves to it.
- Confirm the 2025 Fall URL remains `/courses/2025/2/dl`.
