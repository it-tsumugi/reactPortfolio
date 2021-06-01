<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Hello, World!</title>
</head>
<body>
<form method="POST" action="hello.php">
名前：
<input type="text" name="name" size="15" />
<input type="submit" name="submit" value="送信" />
</form>
<?php
if($_REQUEST['submit'] != null) {
  sleep(3);
  print('こんにちは、'.$_REQUEST['name'].'さん！');
}
?>
</body>
</html>