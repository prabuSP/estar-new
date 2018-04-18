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

		$(".page-user-invitation #block-system-main").addClass("user_invitation_section");
		$("#send-mails-form>div").addClass("invitation_section");

		$( "#send-mails-form" ).prepend( "<div class='form_image_section'></div>" );
		$( "#send-mails-form" ).prepend( "<ul class='w3lsg-bubbles'><li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li></ul>" );


		 $( "#user-login .user_login_page .login_info_Section").wrap("<div class='login_detail_section'></div>");

		$( ".page-e-star-staff-register #user-register-form>div" ).addClass("register_detail_form");
		$( ".page-e-star-admin-register #user-register-form>div" ).addClass("register_detail_form");
		$( ".page-e-star-manager-register #user-register-form>div" ).addClass("register_detail_form");
		$( ".page-e-star-user-register #user-register-form>div" ).addClass("register_detail_form");
		$( ".page-user-register #user-register-form>div" ).addClass("register_detail_form");

		$( "#user-login .user_login_page #edit-actions" ).addClass("submit-btn");
		$( "#user-login .user_login_page .login_content_Section li" ).wrapInner( "<span></span>" );

		 $( "#user-register-form .register_detail_form .form-item-pass-pass1 #edit-pass-pass1" ).insertBefore( ".password-strength" );
		 $( "#user-register-form .register_detail_form .form-item-pass-pass1 label" ).insertBefore( "#edit-pass-pass1" );

		 $( "#user-register-form .register_detail_form div.password-confirm" ).addClass("password-confirm-section");
		 $( "#user-register-form .register_detail_form .form-item-pass-pass2 #edit-pass-pass2" ).insertBefore( ".password-confirm-section" );
		 $( "#user-register-form .register_detail_form .form-item-pass-pass2 label" ).insertBefore( "#edit-pass-pass2" );

		 $( "#user-register-form .register_detail_form #edit-profile-staff-field-first-name" ).addClass("name_field");
		 $( "#user-register-form .register_detail_form #edit-profile-staff-field-last-name" ).addClass("name_field");
		 $( "#user-register-form .register_detail_form .name_field").wrap("<div class='field_name_section'></div>");
		 $( ".field_name_section" ).prepend( "<div class='form_image_section'></div>" );

		 $( ".register_detail_form .form-select" ).wrap( "<div class='select'></div>" );
		 $( ".register_detail_form .form-type-select" ).wrap( "<div class='select_section register_select'></div>" );
		 $( "#user-register-form .register_detail_form #edit-actions" ).addClass("submit-btn");
		 $( "#user-register-form .register_detail_form #edit-buttons" ).addClass("submit-btn");




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
        cols += '<td class="table_heading"><div class="select_section capacity_select_Section"><div class="select"><select id="edit-donation-select" name="Donation_select['+counter+']" class="form-select"><option value="Materials">Materials</option><option value="Food and refreshments">Food and refreshments</option><option value="Marketing">Marketing</option><option value="Support">Support</option></select></div></div></td>';
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

				$(".form-intervention").change(function(){
					var rootCount=$(this).attr("class").split(" ")[2];
					var globCheckCount=rootCount[rootCount.length-1];
					$("#lm-title-link"+globCheckCount).attr("checked",true);
					var LMCount=$(this).attr("id");
					var orgCount=LMCount[LMCount.length-1];
					$("#check-cont-"+orgCount).attr("checked",true);
				});


    });

    $("input[name='logic_model_title_link0_0']").change(function(){
					var curID=$(this).attr("id");
					var lmVal=curID[curID.length-1];
					$(".logicmodel_inter_con").find('.form-radio').prop('checked', false);
					$(".logicmodel_inter_con").find('.form-radio').prop('disabled', true);
					$("#logicmodel_inter_con_"+lmVal).find('.form-radio').prop('disabled', false);
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


// implementation changes by puviyarasu from 28/12/2017

function showStrategiesBySelect(element){

	   	     $(".form-item-csap-6 .form-radio,.form-item-csap-7 .form-radio").prop('checked', false);
	     var StrategiesVal=element.value;
	     if(StrategiesVal=="CSAP 6"){
				 $("#StrategiesCSAP6").show();
				 $("#StrategiesCSAP7").hide();
				 $("#Enhance_Skills").hide();
	     		 $("#Funding_supports").hide();
	     		 $("#Level_Success").hide();
	     		 $("#Change_Consequences").hide();
	     		 $("#Providing_Support").hide();
	     		 $("#Change_Access").hide();
	     		 $("#Change_Policies").hide();
	     		 $("#Physical_Design").hide();
	     		 $("#Provide_Information").hide();
	     		 $("#person_Conducting_changehidden").show();
	     		 $("#number_adult_physical").hide();
		         $("#addtional_fields").hide();
		         $("#number_adult_Business").hide();
		         $("#number_adult_start").show();
		         $("#common_others").hide();
		             $("#others_for_all").hide();

		 } if(StrategiesVal=="CADCA 7"){
			    $("#StrategiesCSAP7").show();
			    $("#StrategiesCSAP6").hide();
			    $("#Alternative_start").hide();
				$("#information_dissemination").hide();
				$("#community").hide();
				$("#environmental").hide();
				$("#education_csap6").hide();
				$("#Information_Dissemination_csap6").hide();
				$("#problem_referral").hide();
				$("#problem_referral_all_field").show();//Full common field show
				$("#media").hide();
				$("#media_type").hide();
				$("#Media_Campaign").hide();
		  	    $("#social_media").hide();
		  	    $("#number_adult_physical").hide();
		        $("#addtional_fields").hide();
		        $("#number_adult_Business").hide();
		        $("#number_adult_start").show();
		            $("#common_others").hide();
		                $("#others_for_all").hide();
		 }
}

function showcsap6(element)
{
	     var csap6Val=element.value;
	     if(csap6Val=="Alternative Activities"){
				if($("#Alternative_start").is(":hidden")){
					$("#Alternative_start").show();
			    }else{ $("#Alternative_start").hide(); }
				$("#information_dissemination").hide();
				$("#community").hide();
				$("#environmental").hide();
				$("#education_csap6").hide();
			    $("#Information_Dissemination_csap6").hide();
				$("#problem_referral").hide();
				$("#problem_referral_all_field").show();//Full common field show
				$("#media").hide();
				$("#media_type").hide();
				$("#Media_Campaign").hide();
		  	    $("#social_media").hide();
		  	    $("#media_lenght").show();
		  	    $("#number_adult_start").show();
		  	        $("#others_for_all").hide();//lenght service,address,location ,number of adults show
		 }
		 if(csap6Val=="Community-based Process"){
		 	    //$("#community").show();
		 	    if($("#community").is(":hidden")){
					$("#community").show();
			    }else{ $("#community").hide(); }
		 	    $("#information_dissemination").hide();
			    $("#Alternative_start").hide();
			    $("#environmental").hide();
			    $("#education_csap6").hide();
			    $("#Information_Dissemination_csap6").hide();
			    $("#problem_referral").hide();
			    $("#problem_referral_all_field").show(); //Full common field show
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		  	    $("#social_media").hide();
		  	    $("#media_lenght").show();
		  	    $("#number_adult_start").show();
		  	        $("#others_for_all").hide();//lenght service,address,location ,number of adults show
		 }
		  if(csap6Val=="Education"){
			  if($("#education_csap6").is(":hidden")){
					$("#education_csap6").show();
			    }else{ $("#education_csap6").hide(); }
			    $("#Alternative_start").hide();
			    $("#community").hide();
			    $("#information_dissemination").hide();
			    $("#environmental").hide();
			    $("#education_csap6").show();
			    $("#Information_Dissemination_csap6").hide();
			    $("#problem_referral").hide();
			    $("#problem_referral_all_field").show();//Full common field show
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		  	    $("#social_media").hide();
		  	    $("#media_lenght").show();
		  	    $("#number_adult_start").show();
		  	        $("#others_for_all").hide();//lenght service,address,location ,number of adults show
		 }
		  if(csap6Val=="Environmental"){

			    if($("#environmental").is(":hidden")){
					$("#environmental").show();
			    }else{ $("#environmental").hide(); }
			    $("#Alternative_start").hide();
			    $("#community").hide();
			    $("#information_dissemination").hide();
			    $("#environmental").show();
			    $("#education_csap6").hide();
			    $("#Information_Dissemination_csap6").hide();
			    $("#problem_referral").hide();
			    $("#problem_referral_all_field").show();//Full common field show
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		  	    $("#social_media").hide();
		  	    $("#media_lenght").show();
		  	    $("#number_adult_start").hide();
		  	        $("#others_for_all").hide();//lenght service,address,location ,number of adults show
		 }
		  if(csap6Val=="Information Dissemination"){
			  	if($("#information_dissemination").is(":hidden")){
					$("#information_dissemination").show();
			    }else{ $("#information_dissemination").hide(); }
			    $("#Alternative_start").hide();
			    //$("#information_dissemination").show();
			    $("#community").hide();
			    $("#environmental").hide();
			    $("#education_csap6").hide();
			    $("#Information_Dissemination_csap6").show();
			    $("#problem_referral").hide();
			    $("#problem_referral_all_field").show();//Full common field show
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		  	    $("#social_media").hide();
		  	    $("#media_lenght").show();
		  	    $("#number_adult_start").show();
		  	        $("#others_for_all").hide();//lenght service,address,location ,number of adults show
		 }
		  if(csap6Val=="Problem ID and Referral"){
			  if($("#problem_referral").is(":hidden")){
					$("#problem_referral").show();
			    }else{ $("#problem_referral").hide(); }
			    $("#Alternative_start").hide();
			    $("#information_dissemination").hide();
			    $("#community").hide();
			    $("#environmental").hide();
			    $("#education_csap6").hide();
			    $("#Information_Dissemination_csap6").hide();
			    //$("#problem_referral").show();
			    $("#problem_referral_all_field").hide();//Full common field show
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		  	    $("#social_media").hide();
		  	    $("#media_lenght").show();
		  	    $("#number_adult_start").show();
		  	        $("#others_for_all").hide();//lenght service,address,location ,number of adults show
		 }
}

function information(element){
	  var infomationval=element.value;
	     if(infomationval=="None"){
		  	   $("#media").hide();
		  	   $("#Media_Campaign").hide();
		  	   $("#media_type").hide();
		  	   $("#social_media").hide();
		  	   $("#number_adult_start").show();
		  	       $("#others_for_all").hide();
		 }
		  if(infomationval=="Media"){
		       $("#media").show();
		       $("#Media_Campaign").hide();
		       $("#media_type").show();
		       $("#social_media").hide();
		   	   $("#media_lenght").hide();
		   	   $("#number_adult_start").hide();
		   	       $("#others_for_all").hide();//lenght service,address,location ,number of adults hide
		 }
		  if(infomationval=="Social Media"){
			  $("#media").hide();
			  $("#media_type").hide();
			  $("#Media_Campaign").hide();
			  $("#social_media").show();
			  $("#media_lenght").hide();
			  $("#number_adult_start").hide();
			      $("#others_for_all").hide();//lenght service,address,location ,number of adults hide
		 }
		  if(infomationval=="Presentations"){
		  	 $("#media").hide();
		  	 $("#media_type").hide();
		  	 $("#Media_Campaign").hide();
		  	 $("#social_media").hide();
		  	 $("#media_lenght").show();
		  	 $("#number_adult_start").show();
		  	 $("#others_for_all").hide();//lenght service,address,location ,number of adults show
		 }
		  if(infomationval=="Distribution of Materials"){
		  	 $("#media").hide();
		  	 $("#media_type").hide();
		  	 $("#Media_Campaign").hide();
		  	 $("#social_media").hide();//social media fields hidden
		  	 $("#media_lenght").show();
		  	 $("#number_adult_start").show();
		  	 $("#others_for_all").hide();//lenght service,address,location ,number of adults show
		 }

}

//stagries csap 7

function showcsap7(element)
{
	     var csap7Val=element.value;
	     if(csap7Val=="Enhance Skills"){

	     		 $("#Enhance_Skills").show();
	     		 $("#Funding_supports").show();
	     		 $("#Level_Success").show();
	     		 $("#Change_Consequences").hide();
	     		 $("#Providing_Support").hide();
	     		 $("#Provide_Information").hide();
	     		 $("#Change_Access").hide();
	     		 $("#Change_Policies").hide();
	     		 $("#Physical_Design").hide();
	     		 $("#media_lenght").show();
	     		 $("#person_Conducting_changehidden").show();
	     		 $("#media").hide();
	     		 $("#media_type").hide();
	     		 $("#Media_Campaign").hide();
		     	 $("#social_media").hide();
		     	 $("#number_adult_physical").hide();
		         $("#addtional_fields").hide();
		         $("#number_adult_Business").hide();
		         $("#number_adult_start").show();
		         $("#others_for_all").hide();

		 }
		 if(csap7Val=="Providing Support"){
	             $("#Enhance_Skills").hide();
	             $("#Providing_Support").show();
	             $("#Provide_Information").hide();
	             $("#Change_Consequences").hide();
	             $("#Funding_supports").show();
	     		 $("#Level_Success").show();
	     		 $("#Change_Access").hide();
	     		 $("#Change_Policies").hide();
	     		 $("#Physical_Design").hide();
	     		 $("#media_lenght").show();
	     		 $("#person_Conducting_changehidden").show();
	     		 $("#media").hide();
	     		 $("#media_type").hide();
	     		 $("#Media_Campaign").hide();
		     	 $("#social_media").hide();
		     	 $("#number_adult_physical").hide();
		         $("#addtional_fields").hide();
		         $("#number_adult_Business").hide();
		         $("#number_adult_start").show();
		         $("#others_for_all").hide();

		 }
		  if(csap7Val=="Provide Information"){
			     $("#Enhance_Skills").hide();
			     $("#Providing_Support").hide();
			     $("#Provide_Information").show();
			     $("#Change_Consequences").hide();
			     $("#Level_Success").show();
			     $("#Change_Access").hide();
			     $("#Change_Policies").hide();
			     $("#Physical_Design").hide();
			     $("#person_Conducting_changehidden").show();
			     $("#media_lenght").hide();
			     $("#Funding_supports").show();
			     $("#number_adult_physical").hide();
		         $("#addtional_fields").hide();
		         $("#number_adult_Business").hide();
		         $("#number_adult_start").show();
		             $("#others_for_all").hide();

		 }

		  if(csap7Val=="Change Consequences"){
			    $("#Enhance_Skills").hide();
			    $("#Change_Consequences").show();
			    $("#Providing_Support").hide();
			    $("#Provide_Information").hide();
			    $("#Change_Access").hide();
			    $("#Change_Policies").hide();
			    $("#Physical_Design").hide();
			    $("#Level_Success").show();
			    $("#Funding_supports").show();
			    $("#person_Conducting_changehidden").hide();
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		     	$("#social_media").hide();
		     	$("#media_lenght").hide();
		     	$("#number_adult_physical").hide();
		        $("#addtional_fields").show();
		        $("#number_adult_Business").show();
		        $("#number_adult_start").hide();
		            $("#others_for_all").hide();
		 }
		  if(csap7Val=="Change Access and Barries"){
			    $("#Enhance_Skills").hide();
			    $("#Providing_Support").hide();
			    $("#Provide_Information").hide();
			    $("#Change_Consequences").hide();
			    $("#Change_Access").show();
			    $("#Change_Policies").hide();
			    $("#Physical_Design").hide();
			    $("#Level_Success").show();
			    $("#Funding_supports").show();
			    $("#person_Conducting_changehidden").hide();
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		     	$("#social_media").hide();
		        $("#media_lenght").hide();
		        $("#number_adult_physical").show();
		        $("#addtional_fields").show();
		        $("#number_adult_Business").hide();
		        $("#number_adult_start").hide();
		            $("#others_for_all").hide();
		 }
		  if(csap7Val=="Modify/Change Policies"){
			    $("#Enhance_Skills").hide();
			    $("#Providing_Support").hide();
			    $("#Provide_Information").hide();
			    $("#Change_Consequences").hide();
			    $("#Change_Access").hide();
			    $("#Change_Policies").show();
			    $("#Physical_Design").hide();
			    $("#Level_Success").show();
			    $("#Funding_supports").show();
			    $("#person_Conducting_changehidden").hide();
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		     	$("#social_media").hide();
		        $("#media_lenght").hide();
		        $("#number_adult_physical").show();
		        $("#addtional_fields").show();
		        $("#number_adult_Business").hide();
		        $("#number_adult_start").hide();
		            $("#others_for_all").hide();
		 }
		  if(csap7Val=="Physical Design"){
			    $("#Enhance_Skills").hide();
			    $("#Providing_Support").hide();
			    $("#Provide_Information").hide();
			    $("#Change_Consequences").hide();
			    $("#Change_Access").hide();
			    $("#Change_Policies").hide();
			    $("#Physical_Design").show();
			    $("#Level_Success").show();
			    $("#Funding_supports").show();
			    $("#person_Conducting_changehidden").hide();
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		     	$("#social_media").hide();
		     	$("#media_lenght").hide();
		        $("#number_adult_physical").show();
		        $("#addtional_fields").show();
		        $("#number_adult_Business").hide();
		        $("#number_adult_start").hide();
		            $("#others_for_all").hide();

		 }
}


function  provide_information(element){

	  var provideval=element.value;

	     if(provideval=="Media campaigns (Television/ Radio/ Print/ Billboards/ Bus or other Posters),  Media coverage: (TV/ radio/ newspaper stories),"){
		     $("#media").show();
		     $("#media_type").hide();
		     $("#Media_Campaign").show();
		  	 $("#social_media").hide();
		  	 $("#media_lenght").hide();
		  	 $("#number_adult_start").hide();
		  	     $("#others_for_all").hide();

		 }
		 	  if(provideval=="Social networking (Facebook, Twitter, etc.)"){
		   $("#social_media").show();
		     $("#media").hide();
		     $("#media_type").hide();
		     $("#Media_Campaign").hide();
		     $("#media_lenght").hide();
		     $("#number_adult_start").hide();
		         $("#others_for_all").hide();
		 }
		  if(provideval=="Informational materials prepared/ produced"){
		     $("#media").hide();
		     $("#media_type").hide();
		     $("#Media_Campaign").hide();
		  	 $("#social_media").hide();
		  	 $("#media_lenght").hide();
		  	 $("#number_adult_start").hide();
		  	     $("#others_for_all").hide();

		 }
		  if(provideval=="Informational materials disseminated"){
		     $("#media").hide();
		     $("#media_type").hide();
		     $("#Media_Campaign").hide();
		  	 $("#social_media").hide();
		  	 $("#media_lenght").show();
		  	 $("#number_adult_start").show();
		  	     $("#others_for_all").hide();
		 }
		  if(provideval==" Information on DFC Coalition Web site"){
		   $("#media").hide();
		   $("#media_type").hide();
		   $("#Media_Campaign").hide();
		   $("#social_media").hide();
		   $("#media_lenght").hide();
		   $("#number_adult_start").show();
		       $("#others_for_all").hide();

		 }
		  if(provideval==" Direct face-to-face information sessions or Special events (e.g., fairs, community celebrations)"){
		     $("#media").hide();
		     $("#media_type").hide();
		     $("#Media_Campaign").hide();
		  	 $("#social_media").hide();
		  	 $("#media_lenght").show();
		  	 $("#number_adult_start").show();
		  	 $("#others_for_all").hide();
		 }
		   if(provideval=="Others"){
		    $("#media").hide();
		    $("#media_type").hide();
		    $("#Media_Campaign").hide();
		  	$("#social_media").hide();
		  	$("#media_lenght").show();
		  	$("#number_adult_start").show();
		  	$("#others_for_all").hide();
		 }

}


function  Physical_Design_activity_others(element){

	  var activity_others=element.value;

	     if(activity_others=="Other"){
		     $("#others_for_all").show();
		 }
		   if(activity_others=='Encourage business/ supplier designation of "no alcohol" or "no tobacco" zones'){
		     $("#others_for_all").hide();
		 }
		   if(activity_others=="Identify problem establishments for closure,"){
		     $("#others_for_all").hide();
		 }
		   if(activity_others=="Promote improved signage / advetising/ practices by suppliers,"){
		     $("#others_for_all").hide();
		 }
		   if(activity_others=="Improve visibility/ease of surveillance in public places and substance use hotspots,"){
		     $("#others_for_all").hide();
		 }
		   if(activity_others=="Cleanup and Beautification,"){
		     $("#others_for_all").hide();
		 }
		   if(activity_others=="Identify Physical Design Problems,"){
		     $("#others_for_all").hide();
		 }
}


function  Change_Policies_activity_others(element){

	  var activity_others=element.value;

	     if(activity_others=="Other"){
		     $("#others_for_all").show();
		 }
		   if(activity_others=='Cost: Laws/public policies concerning cost (e.g. alcohol or tobacco tax, fees)'){
		     $("#others_for_all").hide();
		 }
		   if(activity_others=="Underage Use: Laws/public policies targeting use, possession, or behavior under the influence of minors"){
		     $("#others_for_all").hide();
		 }
		   if(activity_others=="Schools: Policies promoting drug-free schools"){
		     $("#others_for_all").hide();
		 }
		   if(activity_others=="Treatment/Prevention: Laws/ public policies promoting treatment or prevention alternatives (e.g. diversion treatment programs for underage substance use offenders)"){
		     $("#others_for_all").hide();
		 }
		   if(activity_others=="Workplace: Policies promoting drug-free workplaces"){
		     $("#others_for_all").hide();
		 }
		   if(activity_others=="Citizen enabling/Liability: Laws/ public policies concerning adult (including parent) social enabling or liability (e.g. social host ordinances)"){
		     $("#others_for_all").hide();
		 }
		  if(activity_others=="Supplier Promotion/ Liability: Laws/ public policies concerning supplier advertising, promotion, liability (e.g. server liability, product placeent, happy hours, drink specials"){
		     $("#others_for_all").hide();
		 }
		  if(activity_others=="mandatory compliance checks, responsible beverage service"){
		     $("#others_for_all").hide();
		 }
		  if(activity_others=="Outlet Location / Density: Laws/ public policies concerning limitation and restrictions of location and density of alcohol outlets"){
		     $("#others_for_all").hide();
		 }
		  if(activity_others=="Sales Restrictions: Laws/ publicpolicies concerning restrictions on product sales (e.g., methamphetamine pre-cursor access, alcohol at gas stations)"){
		     $("#others_for_all").hide();
		 }
}



function  Change_Access_activity_others(element){

	  var Change_Access_others=element.value;

	     if(Change_Access_others=="Other"){

		     $("#others_for_all").show();
		 }
		   if(Change_Access_others=="Increased Access to Substance Use Services"){
		     $("#others_for_all").hide();
		 }

	      if(Change_Access_others=="Reducing Home and Social Access to Alcohol and Other Substances"){
		     $("#others_for_all").hide();
		 }

	       if(Change_Access_others=="Improve supports for service use"){
		     $("#others_for_all").hide();
		 }
		     if(Change_Access_others=="Improve access through culturally sensitive outreach"){
		     $("#others_for_all").hide();
		 }
}
function  change_activity_others(element){

	  var change_activity_others=element.value;

	     if(change_activity_others=="Other"){
		     $("#others_for_all").show();
		 }
		   if(change_activity_others=="Strengthening Enforcement"){
		     $("#others_for_all").hide();
		 }

	      if(change_activity_others=="Strengthening Surveillance"){
		     $("#others_for_all").hide();
		 }

	       if(change_activity_others=="Recognition Programs"){
		     $("#others_for_all").hide();
		 }
		     if(change_activity_others=="Publicize Non-Compliance"){
		     $("#others_for_all").hide();
		 }
}

function  provide_other(element){

	  var provide_other=element.value;

	     if(provide_other=="Other"){
		     $("#others_for_all").show();
		 }
		   if(provide_other=="Alternative/drug-free social events"){
		     $("#others_for_all").hide();
		 }

	      if(provide_other=="Youth organizations/ drop-in centers"){
		     $("#others_for_all").hide();
		 }

	       if(provide_other=="Organized youth recreation programs (e.g., athletics, arts, outdoor activities)"){
		     $("#others_for_all").hide();
		 }
		     if(provide_other=="Youth/family community involvement (e.g., school or neighborhood cleanup)"){
		     $("#others_for_all").hide();
		 }

		   if(provide_other=="Youth/family support groups"){
		     $("#others_for_all").hide();
		 }

}

function  enchance_other(element){

	  var enchance_other=element.value;

	     if(enchance_other=="Other"){
		     $("#others_for_all").show();
		 }
		   if(enchance_other=="Youth Education Training Programs (providing information / skills)"){
		     $("#others_for_all").hide();
		 }

	      if(enchance_other=="Parent Education Training Programs"){
		     $("#others_for_all").hide();
		 }

	       if(enchance_other=="Teacher / Youth Worker Education and Training Programs"){
		     $("#others_for_all").hide();
		 }
		     if(enchance_other=="Community Member Education and Training Programs"){
		     $("#others_for_all").hide();
		 }

		   if(enchance_other=="Business Training (e.g., responsible beverage service / vendor training [voluntary or mandatory])"){
		     $("#others_for_all").hide();
		 }

}
