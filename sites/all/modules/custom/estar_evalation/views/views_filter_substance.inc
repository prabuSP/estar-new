<?php 

class views_filter_assessment_substance extends views_handler_filter_field_list { 
	function get_value_options() { 
		$this->value_options = get_taxonomy_terms_data(2);
	}
}

class views_filter_assessment_data_source extends views_handler_filter_field_list { 
	function get_value_options() { 
		$this->value_options = get_taxonomy_terms_data(34); //9,12
	}
}

class views_filter_assessment_indicator extends views_handler_filter_field_list { 
	function get_value_options() { 
		$this->value_options['Consequence Indicator'] = get_taxonomy_terms_data(4);
		$this->value_options['Consumption Indicator'] = get_taxonomy_terms_data(9);
		$this->value_options['Social Indicator'] = get_taxonomy_terms_data(12);
	}
}