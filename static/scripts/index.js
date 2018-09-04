/*
 * Find a Bo
 * index.js
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
        load_interests()
        $("#interest-select").on("change", function() {
                let interest = $("#interest-select").find(":selected").val()
                get_students_by_interest(interest).then((students) => {
                        if (students.length == 0) {
                                alert("No students have registered yet for " + interest)
                        } else {
                                display_relevant_students(students)
                        }
                }).catch((err) => {
                        console.error(err)
                        alert("Unable to find students for given interest") 
                })
        })

        get_approved_leaders().then((students) => {
                console.log(students)
                display_approved_leaders(students)
        })
})

/* Purpose: Query database for relevant students
 * Params: interest (string) - name of interest from select
 * Returns: list of student objects defined as follows:
 *              .name   = name of student
 *              .email  = contact email address
 *              .role   = leadership role
 */
function get_students_by_interest(interest) {
        return new Promise((resolve, reject) => {
                var http = new XMLHttpRequest()
                sendstring = "interest=" + interest
                http.open("POST","/get-leaders" ,true)
                http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                http.onreadystatechange = function() {
                        if (http.readyState == 4 && http.status == 200) {
                                resolve(JSON.parse(http.responseText))
                        }
                }
                http.send(sendstring)
        })
}

/* Purpose: Display table of relevant students on page 
 * Params: studnets (list) - student objects defined as follows
 *              .name   = name of student
 *              .email  = contact email address
 *              .role   = leadership role
 *
 * Returns: list of student objects
 *
 * Additional Info: 
 *              Empties existing content from table to make room for new info
 */
function display_relevant_students(students) {
        $("#leader-table").empty()
        for (let i = 0; i < students.length; i++) {
                let student = students[i]
                $("#leader-table").append(`
                        <tr>
                        <th scope="col">` + student.interest + `</th>
                        <th scope="col">` + student.role + `</th>
                        <th scope="col">` + student.name + `</th>
                        <th scope="col"><a href='mailto:` + student.email + "?subject=Found a Bo'>" + student.email + `</th>
                        </tr>

                `)
        }
}

function get_approved_leaders() {
        return new Promise((resolve, reject) => {
                var http = new XMLHttpRequest()
                let sendstring = ""
                http.open("POST","/get-approved-random-small" ,true)
                http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                http.onreadystatechange = function() {
                        if (http.readyState == 4 && http.status == 200) {
                                resolve(JSON.parse(http.responseText))
                        }
                }
                http.send(sendstring)
        })
}

function display_approved_leaders(students) {
        students = shuffle(students)
        for (let i = 0; i < students.length && i < 25; i++) {
                let student = students[i]
                $("#leader-table").append(`
                        <tr id='` + i + `appr'>
                        <th scope="col">` + student.interest + `</th>
                        <th scope="col">` + student.role + `</th>
                        <th scope="col">` + student.name + `</th>
                        <th scope="col"><a href='mailto:` + student.email + "?subject=Found a Bo'>" + student.email + `</th>
                        </tr>

                `)
        }
}

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
