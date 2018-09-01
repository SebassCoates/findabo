/*
 * Find a Bo
 * interests.js
 * Dynamically loads interests in form fields on various pages
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

var INTERESTS = ["1", "2", "3"]

function load_interests() {
        let select = $("#interest-select")
        select.empty()
        select.append("<option selected disabled>-- Select an Interest --</option>")
        for (let i = 0; i < INTERESTS.length; i++) {
                select.append("<option>" + INTERESTS[i] + "</option>")
        }
}
