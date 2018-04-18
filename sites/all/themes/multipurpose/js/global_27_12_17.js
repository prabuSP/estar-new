jQuery( function($) {
	
	$(document).ready(function(){
		
		// Main menu superfish
		$('#main-menu > ul').addClass('dropdown-menu sf-menu');
		$('#main-menu > ul').superfish({
			delay: 200,
			animation: {opacity:'show', height:'show'},
			speed: 'fast',
			cssArrows: false,
			disableHI: true
		});

		// Mobile Menu
		$('#navigation-toggle').sidr({
			name: 'sidr-main',
			source: '#sidr-close, #site-navigation',
			side: 'left'
		});
		$(".sidr-class-toggle-sidr-close").click( function() {
			$.sidr('close', 'sidr-main');
			return false;
		});
		
		$( ".select_section .form-select" ).wrap( "<div class='select'></div>" );
		
		 $("#top_menu .profile_name_cls>a").addClass("profile_name_top");
			  $(".table_remove_title").hide();	
			  $("#addrow").click(function(){
					$(".table_remove_title").show();
				});
				
				$(".table_remove_title1").hide();	
			  $("#addrow-list").click(function(){
					$(".table_remove_title1").show();
				});
			
						
				

				
	}); // End doc ready

	$(window).load(function(){
		// Homepage FlexSlider

		$('#main-menu > ul > li > a.sf-with-ul').append('<i class="fa fa-angle-down"></i>');
		$('#main-menu > ul > li li > a.sf-with-ul').append('<i class="fa fa-angle-right"></i>');

		$('#homepage-slider').flexslider({
			animation: 'fade',
			slideshow: true,
			smoothHeight: true,
			controlNav: false,
			directionNav: true,
			prevText: '<span class="fa fa-caret-left"></span>',
			nextText: '<span class="fa fa-caret-right"></span>',
			controlsContainer: ".flexslider-container"
		});
		
	}); // End on window load

$(document).ready(function () {
    var counter = 0;

    $("#addrow").on("click", function () {
    	 counter++;
    	
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td class="table_heading"><div class="select_section capacity_select_Section"><div class="select"><select id="edit-donation-select" name="Donation_select['+counter+']" class="form-select"><option value="Materials">Materials1</option><option value="Food and refreshments">Food and refreshments</option><option value="Marketing">Marketing</option><option value="Support">Support</option></select></div></div></td>';
        cols += '<td class="table_heading"><input id="edit-monetary-value" name="Monetary_Value['+counter+']" value="" size="10" maxlength="10" class="form-text required" type="text"></td>';
        cols += '<td class="table_heading multiple_textarea"><textarea id="edit-comment" name="Comment['+counter+']" cols="30" rows="5" class="form-textarea"></textarea></td>';


        cols += '<td class="table_heading"><div class="button button_remove"><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Remove"></div></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        //$("hidden_id").val(cval);
        $("#hidden_id").val(parseInt($("#hidden_id").val()) + 1)
       
    });
    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });
 
	
});

$(document).ready(function () {
     var counter = $('#myTableedit .new_data').length;
    $("#addrowedit").on("click", function () {
    	 counter++;
    	
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td class="table_heading"><div class="select_section capacity_select_Section"><div class="select"><select id="edit-donation-select" name="Donation_select['+counter+']" class="form-select"><option value="Materials">Materials</option><option value="Food and refreshments">Food and refreshments</option><option value="Marketing">Marketing</option><option value="Support">Support</option></select></div></div></td>';
        cols += '<td class="table_heading"><input id="edit-monetary-value" name="Monetary_Value['+counter+']" value="" size="10" maxlength="10" class="form-text required" type="text"></td>';
        cols += '<td class="table_heading multiple_textarea"><textarea id="edit-comment" name="Comment['+counter+']" cols="30" rows="5" class="form-textarea"></textarea></td>';


        cols += '<td class="table_heading"><div  class="button button_remove"><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Remove"></div></td>';
        newRow.append(cols);
        $("table.order-list-edit").append(newRow);
        //$("hidden_id").val(cval);
        $("#hidden_id").val(parseInt($("#hidden_id").val()) + 1)
       
    });
     $("#myTableedit").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });

    $(".remove-edit").on("click", function () {
		    $(this).remove();
    	    var getIdvalue = $(this).attr('id');
    	    var getInt=getIdvalue.replace ( /[^\d.]/g, '' );
            var getIdvalueParsed = parseInt(getInt);
            $('#remove-Donation'+getIdvalueParsed).remove();
            $('#remove-Monetary'+getIdvalueParsed).remove();
            $('#remove-Comment'+getIdvalueParsed).remove();

            counter = $('#myTableedit .new_data').length; 
              counter -= 1;
    });
});




$(document).ready(function () {
	
    var counter = 0;

    $("#addrow-list").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td class="table_heading"><div class="form-item form-type-managed-file form-item-Attachments"><label for="edit-attachments-upload">Managed file field </label><div id="edit-attachments-upload" class="form-managed-file"><input id="edit-attachments-upload" name="files[Attachments]" size="22" class="form-file" type="file"><input id="edit-attachments-upload-button" name="Attachments_upload_button" value="Upload" class="form-submit ajax-processed capacity_upload_btn" type="submit"><input name="Attachments[fid]" value="0" type="hidden"></div><div class="description">Please use the Choose file button to attach a response document<br><strong>Allowed extensions: pdf doc docx</strong>.</div></div></td>';
        cols += '<td class="table_heading multiple_textarea"><textarea id="edit-attachments-notes" name="Attachments_notes"   cols="60" rows="5" class="form-textarea"></textarea></td>';


        cols += '<td class="table_heading multiple_textarea"><div class="button button_remove"><input type="button" class="ibtnDel-list btn btn-md btn-danger "   value="Remove"></div></td>';
        newRow.append(cols);
        $("table.order-list-att").append(newRow);
        counter++;
    });
    $("table.order-list-att").on("click", ".ibtnDel-list", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });
    
    		$('#conFactorCustom0').change(function(){
				var rChk=$(this).is(":checked");
				if(rChk==true){ 
						$("#contributingCustom0").fadeIn('slow');
						$("#confactorText0").prop('required',true);
				}else{
						$("#confactorText0").prop('required',false);
						$("#confactorText0").val("");
						$("#contributingCustom0").fadeOut('slow');
				}
		});


});







	$('input[name="population[Custom]"]').change(function(){ 
		if(this.checked){
		$('#popCustom').fadeIn('slow');
		$("#popCustom").prop('required',true);
		}else{
		$('#popCustom').fadeOut('slow');
		$("#popCustom").prop('required',false);
	    $('#popCustom').val("");

	    }

	});
	$('input[name="age_group[Custom]"]').change(function(){ 
		if(this.checked){
		$('#ageCustom').fadeIn('slow');
		$("#ageCustom").prop('required',true);
		}else{
		$('#ageCustom').fadeOut('slow');
		$("#ageCustom").prop('required',false);
	    $('#ageCustom').val("");
	    }

	});
	$('input[name="site_or_campus[Custom]"]').change(function(){ 
		if(this.checked){
		$('#siteCustom').fadeIn('slow');
		$("#siteCustom").prop('required',true);
		}else{
		$('#siteCustom').fadeOut('slow');
		$("#siteCustom").prop('required',false);
	    $('#siteCustom').val("");
	    }

	});
   /* $('input[name="interventions[Custom]"]').change(function(){ 
		if(this.checked){
		$('#intervCustom').fadeIn('slow');
		$("#interCustomText").prop('required',true);
		}else{
		$('#intervCustom').fadeOut('slow');
		$("#interCustomText").prop('required',false);
	    $('#interCustomText').val("");
	    }

	});*/
	
	$('#edit-date-of-data').change(function(){ 
		var dateOfData=$('input[name=date_of_data1]:checked').val();
		if(dateOfData!=''){
			$('#DateOfDataId').val(dateOfData);
		}
	});
	
	/*$('.rateNumberValid').keypress(function(event) { 
	  if(event.which == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) 
          return true;

     else if((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57))
          event.preventDefault();
	});*/
	
	 $(".rateNumberValid").keydown(function (e) { 
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
            var i=1;
    $("#addMoreInterv").click(function(){ 
		//var Clonedtable = jQuery("#logicmodel_inter_con").clone(true);
        //Clonedtable.appendTo('table#mainTable');
        var locModelCount=$("#LogicModelCountId").val();
        var tabModelCount=$("#tableCountId").val();
	    $("#LogicModelCountId").val(parseInt(locModelCount)+1);

        var locURL=$(location).attr('pathname').split('/').pop();
        if(locURL=="planning-details"){ i=$("#LogicModelCountId").val(); }
        i=$("#LogicModelCountId").val();
        $("#tableCountId").val(i);
        
        $("#logicmodel_inter_con").clone().find("tr,input,select").each(function() { 
	    if($(this).attr('value')=='Custom' || $(this).attr('type')=='text'){ 
			//$(this).parent().parent().remove();
		}
		if($("select#edit-assessment")){
			 $(this).attr({
			  'id': function(_, id) { return id + i },
			  'name': 'assessment_logic_model'+i,
			  //'value': '',
			});
		}
		 $(this).prop('checked',false);
		 $("#edit-assessment"+i).prop('selected',false);
		 //$("#edit-assessment"+i).val('<-- Select which Assessment to be connect -->');
		 if($(this).attr('type')=='radio'){
		  $(this).attr({
			  //'id': function(_, id) { return id + i },
			  'name': 'contributing_factor'+i,
			  //'value': '',               
			  'onclick': 'conFactorCustomTextfield(this,'+i+')'               
			});
		   }else if($(this).attr('type')=='checkbox'){
			 $(this).attr({
			  //'id': function(_, id) { return id + i },
			  'name': 'interventions'+i+'[]',
			  //'value': '',
			  'onclick': 'interCustomTextfield(this,'+i+')'
			});
		   }

		  }).end().appendTo("#mainTable").append('<div class="assessment-nxt-btn"><input style="float:right;" type="button" onclick="removeIntevTab(this,'+i+')"  id ="removeIntervtab" class="add-row form-submit" value="Remove"></div>');
		  i++;
		
	});
	   $('#conSelectAll').change(function(){
			var checked = $(this).prop('checked');
			$('#personConductingTab').find('input:checkbox').prop('checked', checked);
	  });
	  $('#memSelectAll').change(function(){
			var checked = $(this).prop('checked');
			$('#membersInvolvedTab').find('input:checkbox').prop('checked', checked);
	  });
    
    //$('#assessmentDataLists').dataTable();
    
    $(document).ready(function(){
        // Show hide popover
        $(".dropdown").click(function(){
            $(this).find(".dropdown-menu").slideToggle("fast");
        });
    });
    
	
});



function showCustomTextfield(element){

		if(element.value=="Custom"){ 
			    $("#subCustom").prop('required',true);
				$("#subCustom").fadeIn('slow');
		}else{
			    $("#subCustom").prop('required',false);
			    $("#subCustom").val("");
				$("#subCustom").fadeOut('slow');
		}
	
}
function showSourceTextfield(element){

		if(element.value=="Custom"){ 
			    $("#dataCustom").prop('required',true);
				$("#dataCustom").fadeIn('slow');
		}else{
			    $("#dataCustom").prop('required',false);
			    $("#dataCustom").val("");
				$("#dataCustom").fadeOut('slow');
		}
	
}

function conCustomTextfield(element){

		if(element.value=="Custom"){ 
				$("#conCustom").fadeIn('slow');
				$("#conCustom").prop('required',true);
		}else{
			    $("#conCustom").prop('required',false);
			    $("#conCustom").val("");
				$("#conCustom").fadeOut('slow');
		}
	
}
function consCustomTextfield(element){

		if(element.value=="Custom"){ 
				$("#consCustom").fadeIn('slow');
				$("#consCustom").prop('required',true);
		}else{
			    $("#consCustom").prop('required',false);
			    $("#consCustom").val("");
				$("#consCustom").fadeOut('slow');
		}
	
}
function socialCustomTextfield(element){

		if(element.value=="Custom"){ 
				$("#socialCustom").fadeIn('slow');
				$("#socialCustom").prop('required',true);
		}else{
			    $("#socialCustom").prop('required',false);
			    $("#socialCustom").val("");
				$("#socialCustom").fadeOut('slow');
		}
	
}
function conFactorCustomTextfield(element,eleId){
     if(eleId=="0"){
		if(element.value=="Custom"){ 
				$("#contributingCustom0").fadeIn('slow');
				$("#confactorText0").prop('required',true);
		}else{
			    $("#confactorText0").prop('required',false);
			    $("#confactorText0").val("");
				$("#contributingCustom0").fadeOut('slow');
		}
	}else{  
		if(element.value=="Custom"){ 
				$("#contributingCustom0"+eleId).fadeIn('slow');
				$("#confactorText0"+eleId).prop('required',true);
		}else{
			    $("#confactorText0"+eleId).prop('required',false);
			    $("#confactorText0"+eleId).val("");
				$("#contributingCustom0"+eleId).fadeOut('slow');
		}
		
	}
	
}
function interCustomTextfield(element,eleId){ 
	if(eleId=="0"){
			if(element.value=="Custom" && $(element).is(":checked")){
				$('#intervCustom0').fadeIn('slow');
				$("#interCustomText0").prop('required',true);
            }
            else if(element.value=="Custom" && $(element).is(":not(:checked)")){
				$('#intervCustom0').fadeOut('slow');
				$("#interCustomText0").prop('required',false);
				$('#interCustomText0').val("");
            }
	}else{
		   if(element.value=="Custom" && $(element).is(":checked")){
				$('#intervCustom0'+eleId).fadeIn('slow');
				$("#interCustomText0"+eleId).prop('required',true);
            }
            else if(element.value=="Custom" && $(element).is(":not(:checked)")){
				$('#intervCustom0'+eleId).fadeOut('slow');
				$("#interCustomText0"+eleId).prop('required',false);
				$('#interCustomText0'+eleId).val("");
            }
		
	}
}
function showIndicatorsBySelect(element){ 
	
	     $(".form-radio").prop('checked', false);
	     /*$("#conIndi").prop('checked', false);
	     $("#consumIndi").prop('checked', false);
	     $("#sociIndi").prop('checked', false);*/
	     var indicatorVal=element.value;//alert(indicatorVal);
	     if(indicatorVal=="Consequence Indicator"){
			    //$("#conIndi").prop('required',true);
				$("#consequenceIndicator").show();	
				$("#consumptionIndicator").hide();	
				$("#socialIndicator").hide();	
		 } if(indicatorVal=="Consumption Indicator"){
			    //$("#consumIndi").prop('required',true);
			    $("#consumptionIndicator").show();
			    $("#consequenceIndicator").hide();
			    $("#socialIndicator").hide();	
		 } if(indicatorVal=="Social Indicator"){
			    //$("#sociIndi").prop('required',true);
			    $("#socialIndicator").show();
			    $("#consumptionIndicator").hide();
			    $("#consequenceIndicator").hide();	
		 }
		  if(indicatorVal==""){
			    $("#socialIndicator").hide();
			    $("#consumptionIndicator").hide();
			    $("#consequenceIndicator").hide();	
		 }
}
function removeIntevTab(element,curCount){
	var tabCount=$("#tableCountId").val();
	var totCount=parseInt(curCount)-parseInt(1);
	var totLogicCount=parseInt(curCount)-parseInt(1);
	$("#tableCountId").val(totCount);
	$("#LogicModelCountId").val(totLogicCount);
	$(element).closest("#logicmodel_inter_con").remove();
	
}
function removeIntevTabEdit(element,curCount){
	var tabCount=$("#tableCountId").val();
	var totCount=parseInt(curCount)-parseInt(1);
	var totLogicCount=parseInt(curCount)-parseInt(1);
	$("#tableCountId").val(totCount);
	$("#LogicModelCountId").val(totLogicCount);
	$(element).closest("#logicmodel_inter_con").remove();
	
}
function checkAllFunc(element,eCount){
			var checked = $(element).prop('checked');
			$('#logicmodel_inter_con_'+eCount).parent().parent().find('input:checkbox').not('.unCheckLogicModel').prop('checked', checked);
}
