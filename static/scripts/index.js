/*
 * Find a Bo
 * Handles search and database queries for dynamically loading student contacts
 * Copyright (C) 2018  Sebastian Coates

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// Prepare to handle search when page loads
$(document).ready(function() {
        $("#interest-select").on("change", function() {
                let interest = $("#interest-select").find(":selected").val()
                let students = get_students_by_interest(interest)
                display_relevant_students(students)
        })
})

/* Purpose: Query database for relevant students
 * Params: interest (string) - name of interest from select
 * Returns: list of student objects defined as follows:
 *              .name   = name of student
 *              .email  = contact email address
 *              .groups = list of groups relating to given interest
 *                        that this student participates in 
 */
function get_students_by_interest(interest) {
        console.log(interest)
        return ["jimbob", "sally", "katie"]
}

/* Purpose: Display table of relevant students on page 
 * Params: studnets (list) - student objects defined as follows
 *              .name   = name of student
 *              .email  = contact email address
 *              .groups = list of groups relating to interest
 *                        that this student participates in 
 * Returns: list of student objects
 */
function display_relevant_students(students) {
        console.log(students)
}
