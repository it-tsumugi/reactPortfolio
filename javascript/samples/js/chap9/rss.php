<?php
require_once 'magpie/rss_fetch.inc';
define('MAGPIE_OUTPUT_ENCODING','UTF-8');
define('MAGPIE_CACHE_ON', TRUE);
$rss = fetch_rss($_REQUEST['url']);
mb_convert_variables('UTF-8', 'auto', $rss);
print('<ul>');
foreach($rss->items as $item){
	$pub = $item['pubdate']==null ? $item['dc']['date'] : $item['pubdate'];
?>
	<li>
		<a href='<?php print($item['link']); ?>'>
			<?php print($item['title']); ?></a>
			（<?php print(date('Y/m/d',strtotime($pub))); ?>）
	</li>
<?php } ?>
</ul>
