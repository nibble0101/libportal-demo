/* window.js
 *
 * Copyright 2023 Joseph Mawa
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import Xdp from "gi://Xdp";

export const LibportalDemoWindow = GObject.registerClass({
    GTypeName: 'LibportalDemoWindow',
    Template: 'resource:///org/demo/libportal_demo/window.ui',
    InternalChildren: ['label'],
}, class LibportalDemoWindow extends Gtk.ApplicationWindow {
    constructor(application) {
        super({ application });
    }
});

