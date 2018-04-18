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


		 //color cold generation


		 $( "body.page-planning-details-form" ).addClass("violet_theme");
		 $( "body.page-planning-details" ).addClass("violet_theme");
		 $( "body.page-new-planning" ).addClass("violet_theme");
		 $( "body.page-planning-details-view" ).addClass("violet_theme");
		 $( "body.page-planning-details-view-form" ).addClass("violet_theme");

		 $( "body.page-contact-list" ).addClass("page-capacity");

		 $( "body.page-planning-details-form .planningDataList" ).addClass("model_list_Section");
		 $( "body.page-assessment-details-form #assessmentDataLists" ).addClass("model_list_Section");
		 $( "body.page-implementation-list #capacityDataLists" ).addClass("model_list_Section");


		 $( "#planning-details-form .planning-nxt-btn" ).addClass("submit_button");
		 $( ".page-implementation .capacity-nxt-btn" ).addClass("submit_button");



		 $( "body.page-mou-manager" ).addClass("page-capacity");
		 $( "body.page-contact-add" ).addClass("page-capacity");
		 $( "body.page-team-manager" ).addClass("page-capacity");
		 $( "body.page-contact" ).addClass("page-capacity");


		 $( ".page-e-star-staff-register" ).addClass("registration_form");
		 $( ".page-e-star-admin-register" ).addClass("registration_form");
		 $( ".page-e-star-manager-register" ).addClass("registration_form");
		 $( ".page-e-star-user-register" ).addClass("registration_form");




		 //siva

		 $( "body.page-assessment-details-form" ).addClass("orange_theme");
		 $( "body.page-new-assessment" ).addClass("orange_theme");
		 $( "body.page-assessment-details" ).addClass("orange_theme");
		 $( "body.page-assessment-form" ).addClass("orange_theme");
		 $( "body.page-substance-details" ).addClass("orange_theme");

		 $( "body.page-planning-details-form" ).addClass("violet_theme");
		 $( "body.page-planning-details" ).addClass("violet_theme");
		 $( "body.page-new-planning" ).addClass("violet_theme");
		 $( "body.page-planning-details-view" ).addClass("violet_theme");
		 $( "body.page-planning-details-view-form" ).addClass("violet_theme");

		 $( "body.page-capacity" ).addClass("green_theme");
		 $( "body.page-implementation" ).addClass("blue_theme");
		 $( ".page-e-star-staff-register" ).addClass("green_theme");
		 $( ".page-e-star-admin-register" ).addClass("green_theme");
		 $( ".page-e-star-manager-register" ).addClass("green_theme");
		 $( ".page-e-star-user-register" ).addClass("green_theme");
		 $( ".page-communication-tool-add" ).addClass("green_theme");
		 $( ".page-file-system-library" ).addClass("green_theme");
		 $( "body.page-new-planning assessment-nxt-btn" ).addClass("next_button");

		$("select.error").parent().addClass("error_bg");
		$( ".page-event-created" ).addClass("green_theme");

		 $( ".page-event-created .views-submit-button" ).addClass("next_button");
		 $( ".page-event-created .view-filters .views-exposed-form .views-widget" ).addClass("select_section capacity_select_Section");
		 $( ".page-event-created .view-filters .views-exposed-form .views-widget .form-select" ).wrap( "<div class='select'></div>" );

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
        cols += '<td class="table_heading"><div class="select_section capacity_select_Section"><div class="select"><select id="edit-donation-select" name="Donation_select['+counter+']" class="form-select"><option value="Materials" >Materials</option><option value="Food and refreshments">Food and refreshments</option><option value="Marketing">Marketing</option><option value="Support">Support</option><option value="Other">Other</option></select></div></div></td>';
        cols += '<td class="table_heading"><input id="edit-monetary-value" name="Monetary_Value['+counter+']" value="" size="10" maxlength="10" class="form-text required" type="number"></td>';
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

		$('#selectall-tax-id').change(function(){
	 	 var checked = $(this).prop('checked');
	 	 $('#edit-primary-sector').find('input:checkbox').prop('checked', checked);
	  });

/* Communication select-all */
		$('#capUserSelectAll').change(function(){
		 var checked = $(this).prop('checked');
		 $('#capUserListTab').find('input:checkbox').prop('checked', checked);
	 });

	 $('#capContactSelectAll').change(function(){
		var checked = $(this).prop('checked');
		$('#capContactListTab').find('input:checkbox').prop('checked', checked);
	});

	$('#capTeamSelectAll').live('change',function(){
	 var checked = $(this).prop('checked');
	 $('#capTeamListTab').find('input:checkbox').prop('checked', checked);
 });


    $(document).ready(function(){
			    $('#ciaManagerTab').dataTable({
						"aoColumnDefs": [
				        { 'bSortable': false, 'aTargets': [ -1,-2,-3,-4,-5,-7 ] }
				    ]
					});
					$('#ciaContactTab').dataTable({
						"aoColumnDefs": [
							{ 'bSortable': false, 'aTargets': [ -1,-2,-3,-4 ] }
					  ]
				  });
				$('#fileSystemTab').dataTable({
					"aoColumnDefs": [
						{ 'bSortable': false, 'aTargets': [ -1,-2 ] }
				  ], "aaSorting": []
			  });

				$('#todo-manager').dataTable({
					"aoColumnDefs": [
						{ 'bSortable': false, 'aTargets': [ -1 ] }
				  ]
			  });
						$('#todo-manager-completed').dataTable({
					"aoColumnDefs": [
						{ 'bSortable': false, 'aTargets': [ -1 ] }
				  ]
			  });

        // Show hide popover
        $(".dropdown").click(function(){
            $(this).find(".dropdown-menu").slideToggle("fast");
        });

				$(".form-intervention").change(function(){
					var rootCount=$(this).attr("class").split(" ")[2];
					var globCheckCount=rootCount[rootCount.length-1];
					$("#lm-title-link"+globCheckCount).attr("checked",true);
					var LMCount=$(this).attr("id").split("inter")[1];
					var orgCount=LMCount[LMCount.length-1];//alert(LMCount);
					if(jQuery("input[name=contributing_factor0_0]")){ jQuery("input[name=contributing_factor0_0]").attr("checked",false); }
					if(jQuery("input[name=contributing_factor]")){ jQuery("input[name=contributing_factor]").attr("checked",false); }
					$("#check-cont-"+LMCount).attr("checked",true);
				});

				$('.imp-trash').click(function(){
					if (confirm('Really do you want to delete this pending report?')) {
					} else {
					 return false;
					}
				});
				$('.del-contact').click(function(){
					if (confirm('Really do you want to delete this contact?')) {
					} else {
					 return false;
					}
				});
				$('.del-docs').live('click',function(){
					if (confirm('Really do you want to delete this file?')) {
					} else {
					 return false;
					}
				});

    });

    $("input[name='logic_model_title_link0_0']").change(function(){
					var curID=$(this).attr("id");
					var lmVal=curID[curID.length-1];
					$(".logicmodel_inter_con").find('.form-radio').prop('checked', false);
					$(".logicmodel_inter_con").find('.form-radio').prop('disabled', true);
					$("#logicmodel_inter_con_"+lmVal).find('.form-radio').prop('disabled', false);
	});

	var locURL=$(location).attr('pathname').split('/')[2];
	var locURL1=$(location).attr('pathname').split('/')[3];
	if(locURL=="mou_manager"){
			tinymce.init({ selector:'textarea#edit-mou-text' });
	} if(locURL1=="renew"){
			tinymce.init({ selector:'textarea#edit-mail-body' });
	} if(locURL=="communication_tool"){
			tinymce.init({ selector:'textarea#edit-mail-body' });
	}
$('.mouManagerClass').change(function(){
			//alert($(this).attr('value'));
			var locURL=String( document.location.href ).replace( /#/, "" );
			var inviterId=$(this).attr('value');
			var inviterType=$(this).attr('title');
			$.ajax({
							 url: locURL+"/get_manager_details/?user_id="+inviterId+"?"+inviterType,
							 type: "post",
							 success: function(res) {
									 //console.log(res);
									 var userDetails=res.split(',');
									 $('#first-id').val(userDetails[0]);
									 $('#last-id').val(userDetails[1]);
									 $('#em-id').val(userDetails[2]);
									 $('#ph-id').val(userDetails[3]);
									 if(userDetails[4]!=""){ $('#org-id').val(userDetails[4]); }
									 if(userDetails[5]!=""){ $('#sect-id').val(userDetails[5]); }
									 $('#edit-mail-subject').val('Hi Mr. '+userDetails[0]+' Volunteer here is your CIA');
									 $('#edit-mail-body').html('Hi '+userDetails[0]+' <br> Thanks for joining our group.<br> Please click <a href="'+locURL+'/view/'+inviterId+'">HERE</a> to see web page \n'+$('#hidUserName').val());
									 //tinymce.get('edit-mail-body').setContent('Hi <b>'+userDetails[0]+'</b> <br> Thanks for joining our group.<br> Please click <a href="'+locURL+'/view/'+inviterId+'">HERE</a> to see web page \n'+$('#hidUserName').val());
									 //$('#edit-mail-body').html('Hi '+userDetails[0]+' \nThanks for joining for group.\n'+$('#hidUserName').val());
							 }
					 });
});

$('.teamManagerClass').change(function(){
			//alert($(this).attr('value'));
			var locURL=String( document.location.href ).replace( /#/, "" );
			var teamId=$(this).attr('value');
			var teamType=$(this).attr('title');
			$('#loadImgId').show();
			$('#teamTabId').hide();
			$.ajax({
							 url: locURL+"/list_members/?team_id="+teamId,
							 type: "post",
							 dataType:"html",
							 success: function(res) {
									 //console.log(res);
									 $('#teamTabId').html(res);
									 $('#loadImgId').hide();
									 $('#teamTabId').show();
							 }
					 });
});

});


function showothersHiddenField(element){

		if(element.value=="others"){
			    $("#otherHidden").prop('required',true);
				$("#otherHidden").fadeIn('slow');
		}else{
			    $("#otherHidden").prop('required',false);
			    $("#otherHidden").val("");
				$("#otherHidden").fadeOut('slow');
		}

}
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
	     		          $("#edit-personconductiongtoggle").show();
	     		 $("#number_adult_physical").hide();
		         $("#addtional_fields").hide();
		         $("#number_adult_Business").hide();
		         $("#number_adult_start").show();
		         $("#common_others").hide();
		         $("#others_for_all").hide();
		         $("#edit-submit").show();
		         $("#number_adult_information").hide();
		         $("#number_adult_presentation").hide();

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
		         $("#edit-submit").show();
		           $("#number_adult_information").hide();
		           $("#number_adult_presentation").hide();
		 }
}

function showcsap6(element)
{
	     var csap6Val=element.value;

	     if(csap6Val=="Alternative Activities"){
				$("#Alternative_start").show();
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
		  	    $("#lenght_environmental").show();
		  	    $("#number_adult_start").show();
		  	    $("#person_Conducting_change_hidden").show();
		  	             $("#edit-personconductiongtoggle").show();
		  	    $("#others_for_all").hide();
		  	    $("#edit-submit").show();
		  	    $("#edit-community-based-process").val('');
		  	    $("#edit-education-csap").val('');
		  	    $("#edit-environmental").val('');
		  	    $("#edit-information-dissemination-csap6").val('');
		  	    $("#edit-physical-design").val('');
		  	      $("#edit-enhance-skills").val('');
		  	      $("#edit-providing-support").val('');
		        $("#edit-provide-information").val('');
		  	    $("#edit-change-consequences").val('');
		  	    $("#edit-change-access").val('');
		  	    $("#edit-change-policies").val('');
		  	      $("#number_adult_information").hide();
		  	      $("#number_adult_presentation").hide();

		  	     //lenght service,address,location ,number of adults show
		 }
		 if(csap6Val=="Community-based Process"){
			    $("#community").show();
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
		  	    $("#lenght_environmental").show();
		  	    $("#number_adult_start").show();
		  	    $("#person_Conducting_change_hidden").show();
		  	             $("#edit-personconductiongtoggle").show();
		  	    $("#others_for_all").hide();
		  	     $("#edit-submit").show();//lenght service,address,location ,number of adults show
				$("#edit-alternative-activities").val('');
		        $("#edit-education-csap").val('');
		  	    $("#edit-environmental").val('');
		  	    $("#edit-information-dissemination-csap6").val('');
		  	    $("#edit-physical-design").val('');
		  	      $("#edit-enhance-skills").val('');
		  	      $("#edit-providing-support").val('');
		        $("#edit-provide-information").val('');
		  	    $("#edit-change-consequences").val('');
		  	    $("#edit-change-access").val('');
		  	    $("#edit-change-policies").val('');
		  	      $("#number_adult_information").hide();
		  	      $("#number_adult_presentation").hide();
		 }
		  if(csap6Val=="Education"){
			    $("#Alternative_start").hide();
			    $("#community").hide();
			    $("#information_dissemination").hide();
			    $("#environmental").hide();
			    $("#education_csap6").show();
			    $("#Information_Dissemination_csap6").hide();
			             $("#edit-personconductiongtoggle").show();
			    $("#problem_referral").hide();
			    $("#problem_referral_all_field").show();
			    $("#person_Conducting_change_hidden").show();//Full common field show
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		  	    $("#social_media").hide();
		  	    $("#media_lenght").show();
		  	    $("#lenght_environmental").show();
		  	    $("#number_adult_start").show();
		  	    $("#others_for_all").hide();
		  	     $("#edit-submit").show();
                $("#edit-alternative-activities").val('');
		        $("#edit-community-based-process").val('');
		  	    $("#edit-environmental").val('');
		  	    $("#edit-information-dissemination-csap6").val('');
		  	    $("#edit-physical-design").val('');
		  	      $("#edit-enhance-skills").val('');
		  	      $("#edit-providing-support").val('');
		        $("#edit-provide-information").val('');
		  	    $("#edit-change-consequences").val('');
		  	    $("#edit-change-access").val('');
		  	    $("#edit-change-policies").val('');
		  	      $("#number_adult_information").hide();
		  	      $("#number_adult_presentation").hide();
		  	     //lenght service,address,location ,number of adults show
		 }
		  if(csap6Val=="Environmental"){

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
		  	    $("#lenght_environmental").hide();
		  	    $("#number_adult_start").hide();
		  	    $("#others_for_all").hide();
		  	    $("#person_Conducting_change_hidden").hide();
		  	             $("#edit-personconductiongtoggle").hide();
		  	     $("#edit-submit").show();
		  	    $("#edit-alternative-activities").val('');
		        $("#edit-community-based-process").val('');
		  	    $("#edit-education-csap").val('');
		  	    $("#edit-information-dissemination-csap6").val('');
                  $("#edit-physical-design").val('');
		  	      $("#edit-enhance-skills").val('');
		  	      $("#edit-providing-support").val('');
		        $("#edit-provide-information").val('');
		  	    $("#edit-change-consequences").val('');
		  	    $("#edit-change-access").val('');
		  	    $("#edit-change-policies").val('');
		  	      $("#number_adult_information").hide();
		  	      $("#number_adult_presentation").hide();
		  	    //lenght service,address,location ,number of adults show
		 }
		  if(csap6Val=="Information Dissemination"){
			    $("#information_dissemination").show();
			       $("#number_adult_information").show();
			    $("#Alternative_start").hide();
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
		  	    $("#lenght_environmental").show();
		  	    $("#number_adult_start").show();
		  	    $("#person_Conducting_change_hidden").show();
		  	             $("#edit-personconductiongtoggle").hide();
		  	    $("#others_for_all").hide();
		  	    $("#edit-submit").show();
                $("#edit-alternative-activities").val('');
		        $("#edit-community-based-process").val('');
		  	    $("#edit-education-csap").val('');
		  	     $("#edit-environmental").val('');
		  	     $("#edit-physical-design").val('');
		  	      $("#edit-enhance-skills").val('');
		  	      $("#edit-providing-support").val('');
		        $("#edit-provide-information").val('');
		  	    $("#edit-change-consequences").val('');
		  	    $("#edit-change-access").val('');
		  	    $("#edit-change-policies").val('');
		  	    $("#number_adult_presentation").show();
		  	      //lenght service,address,location ,number of adults show
		 }
		  if(csap6Val=="Problem ID and Referral"){
			    $("#problem_referral").show();
			    $("#Alternative_start").hide();
			    $("#information_dissemination").hide();
			    $("#community").hide();
			    $("#environmental").hide();
			    $("#education_csap6").hide();
			    $("#Information_Dissemination_csap6").hide();
			    $("#problem_referral_all_field").hide();//Full common field show
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		  	    $("#social_media").hide();
		  	    $("#media_lenght").hide();
		  	    $("#lenght_environmental").hide();
		  	    $("#number_adult_start").hide();
		  	    $("#person_Conducting_change_hidden").hide();
		  	             $("#edit-personconductiongtoggle").hide();
		  	    $("#others_for_all").hide();
                 $("#edit-submit").hide();
                 $("#edit-physical-design").val('');
		  	      $("#edit-enhance-skills").val('');
		  	      $("#edit-providing-support").val('');
		        $("#edit-provide-information").val('');
		  	    $("#edit-change-consequences").val('');
		  	    $("#edit-change-access").val('');
		  	    $("#edit-change-policies").val('');
		  	        $("#number_adult_information").hide();
		  	         	    $("#number_adult_presentation").hide();
		  	    //lenght service,address,location ,number of adults show
		 }
}

function information(element){
	  var infomationval=element.value;
	     if(infomationval=="None"){
		  	   $("#media").hide();
		  	   $("#Media_Campaign").hide();
		  	   $("#media_type").hide();
		  	   $("#social_media").hide();
		  	   $("#number_adult_start").hide();
		  	   $("#others_for_all").hide();
		  	   $("#edit-alternative-activities").val('');
		       $("#edit-community-based-process").val('');
		  	   $("#edit-education-csap").val('');
		  	   $("#edit-environmental").val('');
		  	   $("#edit-physical-design").val('');
		  	   $("#edit-enhance-skills").val('');
		  	   $("#edit-providing-support").val('');
		       $("#edit-provide-information").val('');
		  	   $("#edit-change-consequences").val('');
		  	   $("#edit-change-access").val('');
		  	   $("#edit-change-policies").val('');
		  	   $("#number_adult_information").show();
		  	   $("#number_adult_presentation").show();
		 }
		  if(infomationval=="Media"){
		       $("#media").show();
		       $("#Media_Campaign").hide();
		       $("#media_type").show();
		       $("#social_media").hide();
		   	   $("#media_lenght").hide();
		   	   $("#lenght_environmental").hide();
		   	   $("#number_adult_start").hide();
		   	   $("#number_adult_information").hide();
		   	   $("#others_for_all").hide();
		   	   $("#edit-alternative-activities").val('');
		       $("#edit-community-based-process").val('');
		  	   $("#edit-education-csap").val('');
		  	   $("#edit-environmental").val('');
               $("#edit-physical-design").val('');
		  	   $("#edit-enhance-skills").val('');
		  	   $("#edit-providing-support").val('');
		       $("#edit-provide-information").val('');
		  	   $("#edit-change-consequences").val('');
		  	   $("#edit-change-access").val('');
		  	   $("#edit-change-policies").val('');
		  	   $("#number_adult_presentation").hide();
		  	    $("#person_Conducting_change_hidden").show();
		  	        $("#edit-personconductiongtoggle").show();
		  	     //lenght service,address,location ,number of adults hide
		 }
		  if(infomationval=="Social Media"){
			  $("#media").hide();
			  $("#media_type").hide();
			  $("#Media_Campaign").hide();
			  $("#social_media").show();
			  $("#media_lenght").hide();
			  $("#lenght_environmental").hide();
			  $("#number_adult_start").hide();
			  $("#others_for_all").hide();
			  $("#edit-alternative-activities").val('');
		      $("#edit-community-based-process").val('');
		  	  $("#edit-education-csap").val('');
		  	  $("#edit-environmental").val('');
              $("#edit-physical-design").val('');
		  	  $("#edit-enhance-skills").val('');
		  	  $("#edit-providing-support").val('');
		      $("#edit-provide-information").val('');
		  	  $("#edit-change-consequences").val('');
		  	  $("#edit-change-access").val('');
		  	  $("#edit-change-policies").val('');
		  	  $("#number_adult_information").hide();
		  	  $("#number_adult_presentation").hide();
		  	   $("#person_Conducting_change_hidden").show();
		  	      $("#edit-personconductiongtoggle").show();
		  	     //lenght service,address,location ,number of adults hide
		 }
		  if(infomationval=="Presentations"){
		  	 $("#media").hide();
		  	 $("#media_type").hide();
		  	 $("#Media_Campaign").hide();
		  	 $("#social_media").hide();
		  	 $("#media_lenght").show();
		  	 $("#lenght_environmental").show();
		  	 $("#number_adult_start").hide();
		  	 $("#others_for_all").hide();
		  	 $("#edit-alternative-activities").val('');
		     $("#edit-community-based-process").val('');
		  	 $("#edit-education-csap").val('');
		  	 $("#edit-environmental").val('');
             $("#edit-physical-design").val('');
		  	 $("#edit-enhance-skills").val('');
		  	 $("#edit-providing-support").val('');
		     $("#edit-provide-information").val('');
		  	 $("#edit-change-consequences").val('');
		  	 $("#edit-change-access").val('');
		  	 $("#edit-change-policies").val('');
		  	 $("#number_adult_information").show();
		  	 $("#number_adult_presentation").show();
		  	  $("#person_Conducting_change_hidden").show();
		  	     $("#edit-personconductiongtoggle").show();
		  	      //lenght service,address,location ,number of adults show
		 }
		  if(infomationval=="Distribution of Materials"){
		  	 $("#media").hide();
		  	 $("#media_type").hide();
		  	 $("#Media_Campaign").hide();
		  	 $("#social_media").hide();//social media fields hidden
		  	 $("#media_lenght").show();
		  	 $("#lenght_environmental").show();
		  	 $("#number_adult_start").hide();
		  	 $("#others_for_all").hide();
		  	 $("#edit-alternative-activities").val('');
		     $("#edit-community-based-process").val('');
		  	 $("#edit-education-csap").val('');
		  	 $("#edit-environmental").val('');
             $("#edit-physical-design").val('');
		  	 $("#edit-enhance-skills").val('');
		  	 $("#edit-providing-support").val('');
		     $("#edit-provide-information").val('');
		  	 $("#edit-change-consequences").val('');
		  	 $("#edit-change-access").val('');
		  	 $("#edit-change-policies").val('');
		  	  $("#number_adult_information").show();
		  	   $("#number_adult_presentation").show();
		  	    $("#person_Conducting_change_hidden").show();
		  	     $("#edit-personconductiongtoggle").show();

		  	     //lenght service,address,location ,number of adults show
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
	     		 $("#lenght_environmental").show();
	     		 $("#person_Conducting_change_hidden").show();
	     		          $("#edit-personconductiongtoggle").show();
	     		 $("#media").hide();
	     		 $("#media_type").hide();
	     		 $("#Media_Campaign").hide();
		     	 $("#social_media").hide();
		     	 $("#number_adult_physical").hide();
		         $("#addtional_fields").hide();
		         $("#number_adult_Business").hide();
		         $("#number_adult_start").show();
		         $("#others_for_all").hide();
		         $("#problem_referral_all_field").show();
		          $("#edit-submit").show();
		        $("#edit-alternative-activities").val('');
		        $("#edit-community-based-process").val('');
		  	    $("#edit-education-csap").val('');
		  	     $("#edit-environmental").val('');
		  	     $("#edit-information-dissemination-csap6").val('');

		  	     $("#edit-physical-design").val('');
		  	      $("#edit-providing-support").val('');
		        $("#edit-provide-information").val('');
		  	    $("#edit-change-consequences").val('');
		  	    $("#edit-change-access").val('');
		  	    $("#edit-change-policies").val('');
		  	    	    	     $("#number_adult_information").hide();
		  	     $("#number_adult_presentation").hide();


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
	     		 $("#lenght_environmental").show();
	     		 $("#person_Conducting_change_hidden").show();
	     		          $("#edit-personconductiongtoggle").show();
	     		 $("#media").hide();
	     		 $("#media_type").hide();
	     		 $("#Media_Campaign").hide();
		     	 $("#social_media").hide();
		     	 $("#number_adult_physical").hide();
		         $("#addtional_fields").hide();
		         $("#number_adult_Business").hide();
		         $("#number_adult_start").show();
		         $("#others_for_all").hide();
		         $("#environmental_purpose").hide();
		         $("#problem_referral_all_field").show();
		          $("#edit-submit").show();
		             $("#edit-alternative-activities").val('');
		        $("#edit-community-based-process").val('');
		  	    $("#edit-education-csap").val('');
		  	     $("#edit-environmental").val('');
		  	     $("#edit-information-dissemination-csap6").val('');

		  	     $("#edit-physical-design").val('');
		  	      $("#edit-enhance-skills").val('');
		        $("#edit-provide-information").val('');
		  	    $("#edit-change-consequences").val('');
		  	    $("#edit-change-access").val('');
		  	    $("#edit-change-policies").val('');
		  	    $("#number_adult_information").hide();
		  	    $("#number_adult_presentation").hide();

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
			     $("#person_Conducting_change_hidden").show();
			         $("#edit-personconductiongtoggle").show();
			     $("#media_lenght").hide();
			     $("#lenght_environmental").hide();
			     $("#Funding_supports").show();
			     $("#number_adult_physical").hide();
		         $("#addtional_fields").hide();
		         $("#number_adult_Business").hide();
		         $("#number_adult_start").hide();
		         $("#others_for_all").hide();
		         $("#environmental_purpose").hide();
		         $("#problem_referral_all_field").show();
		         $("#edit-submit").show();
		         $("#edit-alternative-activities").val('');
		         $("#edit-community-based-process").val('');
		  	     $("#edit-education-csap").val('');
		  	     $("#edit-environmental").val('');
		  	     $("#edit-information-dissemination-csap6").val('');
		  	     $("#edit-physical-design").val('');
		  	     $("#edit-enhance-skills").val('');
		  	     $("#edit-providing-support").val('');
		  	     $("#edit-change-consequences").val('');
		  	     $("#edit-change-access").val('');
		  	     $("#edit-change-policies").val('');
		  	     $("#number_adult_information").show();
		  	     $("#number_adult_presentation").show();

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
			    $("#person_Conducting_change_hidden").hide();
			        $("#edit-personconductiongtoggle").hide();
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		     	$("#social_media").hide();
		     	$("#media_lenght").hide();
		     	$("#lenght_environmental").hide();
		     	$("#number_adult_physical").hide();
		        $("#addtional_fields").show();
		        $("#number_adult_Business").show();
		        $("#number_adult_start").hide();
		        $("#others_for_all").hide();
		        $("#environmental_purpose").hide();
		        $("#problem_referral_all_field").show();
		         $("#edit-submit").show();
		            $("#edit-alternative-activities").val('');
		        $("#edit-community-based-process").val('');
		  	    $("#edit-education-csap").val('');
		  	     $("#edit-environmental").val('');
		  	     $("#edit-information-dissemination-csap6").val('');
	    	     $("#number_adult_information").hide();
		  	     $("#edit-physical-design").val('');
		  	      $("#edit-enhance-skills").val('');
		  	      $("#edit-providing-support").val('');
		        $("#edit-provide-information").val('');
		  	    $("#edit-change-access").val('');
		  	    $("#edit-change-policies").val('');
		  	    $("#number_adult_presentation").hide();
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
			    $("#person_Conducting_change_hidden").hide();
			        $("#edit-personconductiongtoggle").hide();
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		     	$("#social_media").hide();
		        $("#media_lenght").hide();
		        $("#lenght_environmental").hide();
		        $("#number_adult_physical").show();
		        $("#addtional_fields").show();
		        $("#number_adult_Business").hide();
		        $("#number_adult_start").hide();
		        $("#others_for_all").hide();
		        $("#environmental_purpose").hide();
		        $("#problem_referral_all_field").show();
		        $("#edit-submit").show();
		        $("#edit-alternative-activities").val('');
		        $("#edit-community-based-process").val('');
		  	    $("#edit-education-csap").val('');
		  	    $("#edit-environmental").val('');
		  	    $("#edit-information-dissemination-csap6").val('');
                $("#number_adult_information").hide();
                $("#number_adult_presentation").hide();
		  	    $("#edit-physical-design").val('');
		  	    $("#edit-enhance-skills").val('');
		  	    $("#edit-providing-support").val('');
		        $("#edit-provide-information").val('');
		  	    $("#edit-change-consequences").val('');
		  	    $("#edit-change-policies").val('');
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
			    $("#person_Conducting_change_hidden").hide();
			      $("#edit-personconductiongtoggle").hide();
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		     	$("#social_media").hide();
		        $("#media_lenght").hide();
		        $("#lenght_environmental").hide();
		        $("#number_adult_physical").show();
		        $("#addtional_fields").show();
		        $("#number_adult_Business").hide();
		        $("#number_adult_start").hide();
		        $("#others_for_all").hide();
		        $("#environmental_purpose").hide();
		        $("#problem_referral_all_field").show();
		        $("#edit-submit").show();
		        $("#edit-alternative-activities").val('');
		        $("#edit-community-based-process").val('');
		  	    $("#edit-education-csap").val('');
		  	    $("#edit-environmental").val('');
		  	    $("#edit-information-dissemination-csap6").val('');
		  	    $("#edit-physical-design").val('');
		  	    $("#edit-enhance-skills").val('');
		  	    $("#edit-providing-support").val('');
		        $("#edit-provide-information").val('');
		  	    $("#edit-change-consequences").val('');
		  	    $("#edit-change-access").val('');
		  	    $("#number_adult_information").hide();
		  	    $("#number_adult_presentation").hide();
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
			    $("#person_Conducting_change_hidden").hide();
			    $("#edit-personconductiongtoggle").hide();
			    $("#media").hide();
			    $("#media_type").hide();
			    $("#Media_Campaign").hide();
		     	$("#social_media").hide();
		     	$("#media_lenght").hide();
		     	$("#lenght_environmental").hide();
		        $("#number_adult_physical").show();
		        $("#addtional_fields").show();
		        $("#number_adult_Business").hide();
		        $("#number_adult_start").hide();
		        $("#others_for_all").hide();
		        $("#environmental_purpose").hide();
		        $("#problem_referral_all_field").show();
		        $("#edit-submit").show();
		        $("#edit-alternative-activities").val('');
		        $("#edit-community-based-process").val('');
		  	    $("#edit-education-csap").val('');
		  	    $("#edit-environmental").val('');
		  	    $("#edit-information-dissemination-csap6").val('');
		  	    $("#edit-enhance-skills").val('');
		  	    $("#edit-providing-support").val('');
		        $("#edit-provide-information").val('');
		  	    $("#edit-change-consequences").val('');
		  	    $("#edit-change-access").val('');
		  	    $("#edit-change-policies").val('');
                $("#number_adult_information").hide();
                $("#number_adult_presentation").hide();
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
		  	 $("#lenght_environmental").hide();
		  	 $("#number_adult_start").hide();
		  	 $("#others_for_all").hide();
		  	 $("#environmental_purpose").hide();
		  	 $("#number_adult_presentation").hide();
		  	 $("#number_adult_information").hide();

		 }
		 	  if(provideval=="Social networking (Facebook, Twitter, etc.)"){
		   $("#social_media").show();
		     $("#media").hide();
		     $("#media_type").hide();
		     $("#Media_Campaign").hide();
		     $("#media_lenght").hide();
		     $("#lenght_environmental").hide();
		     $("#number_adult_start").hide();
		     $("#others_for_all").hide();
		     $("#environmental_purpose").hide();
		     $("#number_adult_presentation").hide();
		     $("#number_adult_information").hide();
		 }
		  if(provideval=="Informational materials prepared/ produced"){
		     $("#media").hide();
		     $("#media_type").hide();
		     $("#Media_Campaign").hide();
		  	 $("#social_media").hide();
		  	 $("#media_lenght").hide();
		  	 $("#lenght_environmental").hide();
		  	 $("#number_adult_start").hide();
		  	 $("#others_for_all").hide();
		  	 $("#environmental_purpose").hide();
		  	 $("#number_adult_presentation").hide();
		  	 $("#number_adult_information").show();

		 }
		  if(provideval=="Informational materials disseminated"){
		     $("#media").hide();
		     $("#media_type").hide();
		     $("#Media_Campaign").hide();
		  	 $("#social_media").hide();
		  	 $("#media_lenght").show();
		  	 $("#lenght_environmental").show();
		  	 $("#number_adult_start").hide();
		  	 $("#others_for_all").hide();
		  	 $("#environmental_purpose").hide();
		  	 $("#number_adult_presentation").show();
		  	 $("#number_adult_information").show();
		 }
		  if(provideval==" Information on DFC Coalition Web site"){
		   $("#media").hide();
		   $("#media_type").hide();
		   $("#Media_Campaign").hide();
		   $("#social_media").hide();
		   $("#media_lenght").hide();
		   $("#lenght_environmental").hide();
		   $("#number_adult_start").show();
		   $("#others_for_all").hide();
		   $("#environmental_purpose").hide();
		   $("#number_adult_presentation").hide();
		   $("#number_adult_information").hide();

		 }
		  if(provideval==" Direct face-to-face information sessions or Special events (e.g., fairs, community celebrations)"){
		     $("#media").hide();
		     $("#media_type").hide();
		     $("#Media_Campaign").hide();
		  	 $("#social_media").hide();
		  	 $("#media_lenght").show();
		  	 $("#lenght_environmental").show();
		  	 $("#number_adult_start").hide();
		  	 $("#others_for_all").hide();
		  	 $("#environmental_purpose").hide();
		  	 $("#number_adult_presentation").hide();
		   $("#number_adult_information").show();


		 }
		   if(provideval=="Others"){
		    $("#media").hide();
		    $("#media_type").hide();
		    $("#Media_Campaign").hide();
		  	$("#social_media").hide();
		  	$("#media_lenght").show();
		  	$("#lenght_environmental").show();
		  	$("#number_adult_start").show();
		  	$("#others_for_all").hide();
		  	$("#environmental_purpose").hide();
		  $("#number_adult_presentation").hide();
		   $("#number_adult_information").hide();


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

function callbackCIA(ele){
	//tinymce.init({ selector:'textarea' });
			var ciaContentId=$(ele).attr('title');console.log(ciaContent);
			var ciaContent=$('#'+ciaContentId).html();
			tinymce.get('edit-mou-text').setContent(ciaContent);
}

jQuery(document).ready(function(){
    /*jQuery(".messages.error").trigger("click");*/
var locURL=$(location).attr('pathname').split('/')[2];
  if(locURL=="implementation"){
    if ( $( ".implementation-requried" ).length ) {
 		var getValeOF=$('#edit-strategies').val().split(" ");
 		var StrategiesValCheck="CSAP"+getValeOF[1];
    	$('#Strategies'+StrategiesValCheck).show();
    var conVertLower=getValeOF[0].toLowerCase();

    var getIdOfSelectedValue = document.querySelector('input[name="csap_'+getValeOF[1]+'"]:checked').id;
    // alert(getIdOfSelectedValue);
    $('#'+getIdOfSelectedValue).trigger("click");

    if($('#information_dissemination').is(':visible'))
		{
			$('#edit-information-dissemination').trigger('click');
		}

	if($('#edit-provide-information-activity :selected').val() !='')
	{
		$('#edit-provide-information-activity').trigger('click');
	}
}
}
});

jQuery(".modal-trigger").ready(function(){
var locURL=$(location).attr('pathname').split('/')[2];
  if(locURL=="implementation"){
  dataModal = $(this).attr("data-modal");
  $("#" + dataModal).css({"display":"block"});

$(".close-modal, .modal-sandbox").click(function(){
  $(".modal").css({"display":"none"});
});

}
});

function myFunction() {
    window.print();
}
