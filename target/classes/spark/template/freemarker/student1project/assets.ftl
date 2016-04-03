<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
    <body>
        <h3>${dayOfWeek}</h3>
<#if dayOfWeek == "Monday">
        <div class="notification">Monday Task: Audit Network for New Devices</div>

<#elseif dayOfWeek == "Tuesday">
        <div class="notification">Tuesday Task: Create Report for Department Managers</div>

<#elseif dayOfWeek == "Wednesday">
        <div class="notification">Wednesday Task: Test Network Security</div>

<#elseif dayOfWeek == "Thursday">
        <div class="notification">Thursday Task: Review Server Logs</div>

<#elseif dayOfWeek == "Friday">
        <div class="notification">Friday Task: Buy Lunch for Support Technicians</div>

<#else>
        <div class="notification">Why are you working on the weekend?!</div>

</#if>
        </body>
    </html>
