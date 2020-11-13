import React from 'react';

function Skills() {
    return (
        <table class="table-auto mx-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">Title</th>
                    <th class="px-4 py-2">Author</th>                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border px-4 py-2">Intro to CSS</td>
                    <td class="border px-4 py-2">Adam</td>                    
                </tr>
                <tr class="bg-gray-100">
                    <td class="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td class="border px-4 py-2">Adam</td>                    
                </tr>                
            </tbody>
        </table>
    );
}

export default Skills;
