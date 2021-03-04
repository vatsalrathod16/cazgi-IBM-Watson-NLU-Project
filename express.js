const express = require ('express');
const dorenv = require ('dotenv');

function getNLUInstance(){
	let api_key = process.env.API_key;
	let api_url = process.env.API_URL;

const NaturalLanguageUnderstandingV1 = require ('ibm-watson/natural-language-understanding/v1');
const NaturalLanguageUnderstandingV1 = require ('ibm-watson/auth);

const NaturalLanguageUnderstandingV1 = new NaturalLanguageUnderstandingV1({
	version: '2020-08-01',
	authenticator: new IamAuthenticator({
	apikey:api_key,
	});

	serviceUrl: api_url,});

return NaturalLanguageUnderstanding;
} 
