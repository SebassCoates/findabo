/*
 * Find a Bo
 * admin.js
 * Handles administrative tasks like approving or removing users from the database
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

$(document).ready(function() {
	let password = prompt("Enter admin password")

	get_unapproved_leaders(password).then((students) => {
		display_unapproved_leaders(students)
	})

	get_approved_leaders(password).then((students) => {
		display_approved_leaders(students)
	})
})

function get_unapproved_leaders(password) {
	return new Promise((resolve, reject) => {
		var http = new XMLHttpRequest()
	        let sendstring = "password=" + password
	        http.open("POST","/get-unapproved" ,true)
	        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
	        http.onreadystatechange = function() {
	                if (http.readyState == 4 && http.status == 200) {
	                        resolve(JSON.parse(http.responseText))
	                }
	        }
	        http.send(sendstring)
	})
}

function display_unapproved_leaders(students) {
	for (let i = 0; i < students.length; i++) {
                let student = students[i]
                $("#unapproved-table").append(`
                        <tr id='` + i + `'>
                        <th scope="col">` + student.interest + `,</th>
                        <th scope="col">` + student.role + `,</th>
                        <th scope="col">` + student.name + `,</th>
                        <th scope="col"><a href='mailto:` + student.email + "?subject=Found a Bo'>" + student.email + `,</th>
                        <th scope="col"><button onclick='approve_leader("#` + i + `")'>Approve</button>
                        <th scope="col"><button onclick='reject_leader("#` + i + `")'>Reject</button>
                        </tr>

                `)
        }
}

function get_approved_leaders(password) {
	return new Promise((resolve, reject) => {
		var http = new XMLHttpRequest()
	        let sendstring = "password=" + password
	        http.open("POST","/get-approved" ,true)
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
	for (let i = 0; i < students.length; i++) {
                let student = students[i]
                $("#approved-table").append(`
                        <tr id='` + i + `appr'>
                        <th scope="col">` + student.interest + `,</th>
                        <th scope="col">` + student.role + `,</th>
                        <th scope="col">` + student.name + `,</th>
                        <th scope="col"><a href='mailto:` + student.email + "?subject=Found a Bo'>" + student.email + `,</th>
                        <th scope="col"><button onclick='reject_leader("#` + i + `appr")'>Remove</button>
                        </tr>

                `)
        }
}

function approve_leader(id) {
	let entries = ($(id).find('th').text()).split(',')
	let interest = entries[0]
	let email = entries[3]

	var http = new XMLHttpRequest()
        let sendstring = "interest=" + interest + "&email=" + email
        http.open("POST","/approve-leader" ,true)
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        http.onreadystatechange = function() {
                if (http.readyState == 4 && http.status == 200) {
                        if (http.responseText == "Success") {
                        	$(id).remove()
                        }
                }
        }
        http.send(sendstring)
}

function reject_leader(id) {
	let entries = ($(id).find('th').text()).split(',')
	let interest = entries[0]
	let email = entries[3]

	var http = new XMLHttpRequest()
        let sendstring = "interest=" + interest + "&email=" + email
        http.open("POST","/remove-leader" ,true)
        console.log(sendstring)
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        http.onreadystatechange = function() {
                if (http.readyState == 4 && http.status == 200) {
                        if (http.responseText == "Success") {
                        	$(id).remove()
                        }
                }
        }
        http.send(sendstring)
}