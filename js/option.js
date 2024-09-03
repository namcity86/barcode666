jQuery('#barcode .barcode').each(function() {
	var $data = jQuery(this).attr('data-barcode');
	$target = '[data-barcode="'+$data+'"]';
	//alert($target);
	JsBarcode($target, $data);
});
