<?php
header('Content-Type: text/xml;charset=UTF-8');
$params = array(
	'appid'  => 'wings-project',
  'query'  => $_REQUEST['keywd'],
	'results'=> 20
);
$url = 'http://search.yahooapis.jp/WebSearchService/V1/webSearch?'.http_build_query($params);
print(file_get_contents($url));
