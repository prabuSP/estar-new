<?php 

/**
 * @file
 * Views integration for the Estar custom module
 */
 
/**
 * Implements hook_views_data()
 *
 */
/*function estar_evalation_views_data() { 

 	$table = array(

	 	"assessment_details" =>  array (  // Assesment Custom table
			'table' => array(
				'group' => 'Assesment',      // Groupname Assesment
				'base' => array(
					'field' => 'assessment_id',  //Primary key
					'title' => 'Assesment Customtable',
					'help' => 'Assesment Custom database table'
				),
				'join' => array(
					'assessment_rate_details' => array(
						'fild' => 'assessment_id',
						'left-field' => 'assessment_rate_id'
					)
				)
			),

			//Description of assessment_id
			'assessment_id' => array (
				'title' => t('Assesment Custom Id'),
				'help' => t('Assesment Custom table Id field'),
				// is assessment_id field sortable TRUE
				'field' => array(
					'click sortable' => TRUE,
				),

				//Filter handler for filtering records by assessment_id
				'filter' => array(
					'handler' => 'views_handler_filter_numeric'
				),

				'sort' => array(
					'handler' => 'views_handler_sort'
				)
			),

			//Description of uid
			'uid' => array (
				'title' => t('Assesment UId'),
				'help' => t('Assesment Custom table UId field'),
				// is assessment_id field sortable TRUE
				'field' => array(
					'click sortable' => TRUE,
				),

				//Filter handler for filtering records by assessment_id
				'filter' => array(
					'handler' => 'views_handler_filter_numeric'
				),

				'sort' => array(
					'handler' => 'views_handler_sort'
				)
			),

			//Description of title field
	    'title' => array (
		    'title' => t('Assesment Title'),
		    'help' => t('Assesment Custom table Title field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	    //Description of metric field
	    'metric' => array (
		    'title' => t('Assesment metric'),
		    'help' => t('Assesment Custom table metric field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	    //Description of collection period field
	    'collection_period'  => array (
		    'title' => t('Assesment collection period'),
		    'help' => t('Assesment Custom table collection period field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	    //Description of gender field
	    'gender' => array (
		    'title' => t('Assesment gender'),
		    'help' => t('Assesment Custom table gender field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	    //Description of ethnicity field
	    'ethnicity' => array (
		    'title' => t('Assesment ethnicity'),
		    'help' => t('Assesment Custom table ethnicity field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	    //Description of date of data field
	    'date_of_data' => array (
		    'title' => t('Assesment date of data'),
		    'help' => t('Assesment Custom table date of data field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	    //Description of population value field
	    'population_value' => array (
		    'title' => t('Assesment population value'),
		    'help' => t('Assesment Custom table population value field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),	

		)
	);
	return $table;
}

*/

function estar_evalation_views_data() { 

 	$data['assessment_details'] = array (

	 	//"assessment_details" =>  array (  // Assesment Custom table
			'table' => array(
				'group' => 'Assesment',      // Groupname Assesment
				'base' => array(
					'field' => 'assessment_id',  //Primary key
					'title' => 'Assesment Customtable',
					'help' => 'Assesment Custom database table'
				),
				/*'join' => array(
					'assessment_rate_details' => array(
						'fild' => 'assessment_id',
						'left-field' => 'assessment_rate_id'
					)
				)*/
			),

			//Description of assessment_id
			'assessment_id' => array (
				'title' => t('Assesment Custom Id'),
				'help' => t('Assesment Custom table Id field'),
				// is assessment_id field sortable TRUE
				'field' => array(
					'click sortable' => TRUE,
				),

				//Filter handler for filtering records by assessment_id
				'filter' => array(
					'handler' => 'views_handler_filter_numeric'
				),

				'sort' => array(
					'handler' => 'views_handler_sort'
				)
			),

			//Description of uid
			'uid' => array (
				'title' => t('Assesment UId'),
				'help' => t('Assesment Custom table UId field'),
				// is assessment_id field sortable TRUE
				'field' => array(
					'click sortable' => TRUE,
				),

				//Filter handler for filtering records by assessment_id
				'filter' => array(
					'handler' => 'views_handler_filter_numeric'
				),

				'sort' => array(
					'handler' => 'views_handler_sort'
				)
			),

			//Description of title field
	    'title' => array (
		    'title' => t('Assesment Title'),
		    'help' => t('Assesment Custom table Title field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	    //Description of metric field
	    'metric' => array (
		    'title' => t('Assesment metric'),
		    'help' => t('Assesment Custom table metric field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	    //Description of collection period field
	    'collection_period'  => array (
		    'title' => t('Assesment collection period'),
		    'help' => t('Assesment Custom table collection period field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	    //Description of gender field
	    'gender' => array (
		    'title' => t('Assesment gender'),
		    'help' => t('Assesment Custom table gender field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	    //Description of ethnicity field
	    'ethnicity' => array (
		    'title' => t('Assesment ethnicity'),
		    'help' => t('Assesment Custom table ethnicity field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	    //Description of date of data field
	    'date_of_data' => array (
		    'title' => t('Assesment date of data'),
		    'help' => t('Assesment Custom table date of data field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	     //Description of date of data field
	    'substance_id' => array (
		    'title' => t('Assesment substance term Id'),
		    'help' => t('Assesment Custom table substance field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'real_filed' => 'substance_id',
		    'filter' => array(
		      'handler' => 'views_filter_assessment_substance',
		    ),
	      'sort' => array(
		      'handler' => 'views_handler_sort'
		    )
	    ),

	     //Description of date of data field
	    'indicator_id' => array (
		    'title' => t('Assesment indicator term Id'),
		    'help' => t('Assesment Custom table indicator field'),
		    'field' => array(
		    	'click sortable' => TRUE,
		    ),
		    'filter' => array(
		      'handler' => 'views_filter_assessment_indicator'
		    ),
	      'sort' => array(
		      'handler' => 'views_handler_sort'
		    )
	    ),

	     //Description of date of data field
	    'data_source_id' => array (
		    'title' => t('Assesment data source term Id'),
		    'help' => t('Assesment Custom table data source field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_filter_assessment_data_source'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	     //Description of date of data field
	    'created' => array (
		    'title' => t('Assesment created date and time'),
		    'help' => t('Assesment Custom table data creation date and time'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_date'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),

	    /*//Description of population value field
	    'population_value' => array (
		    'title' => t('Assesment population value'),
		    'help' => t('Assesment Custom table population value field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),	*/

		//)
	);

	$data['assessment_rate_details'] = array (
		'table' => array(
			'group' => 'Assesment',      // Groupname Assesment			
			'join' => array(
				'assessment_details' => array(
					'field' => 'assessment_id',
					'left_field' => 'assessment_id'
				)
			)
		),
		'population_value' => array (
		    'title' => t('Assesment population value'),
		    'help' => t('Assesment Custom table population value field'),
		    'field' => array(
		      'click sortable' => TRUE,
		    ),
		    'filter' => array(
		       'handler' => 'views_handler_filter_string'
		    ),
	      'sort' => array(
		        'handler' => 'views_handler_sort'
		     )
	    ),	
	);
	return $data;
}
