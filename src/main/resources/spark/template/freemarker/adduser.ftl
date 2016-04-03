<!DOCTYPE html>
<html>
<head>
  <#include "header.ftl">
</head>

<body>

  <#include "nav.ftl">

<div class="container">

  <h1>users O</h1>
    <ul>
    <#list tests as x>
      <li> ${x} </li>
    </#list>
    </ul>

</div>

</body>
</html>
