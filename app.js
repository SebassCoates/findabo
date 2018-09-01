/*
 * Find a Bo
 * Connecting fellow Jumbos
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

var express = require('express');
var path = require('path')
var app = express();

const PORT = 8000
app.use(express.static(path.join(__dirname, 'static')));


app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/registration', (req, res) => {
        res.sendFile(path.join(
                                __dirname, 
                                'static', 
                                'content', 
                                'html', 
                                'registration.html'
                        ));
})

app.get('/admin', (req, res) => {
        res.sendFile(path.join(
                                __dirname, 
                                'static', 
                                'content', 
                                'html', 
                                'admin.html'
                        ));
})


app.listen((process.env.PORT || PORT), function() {
  console.log('Node app is running on port: ' + (process.env.PORT || PORT));
});
