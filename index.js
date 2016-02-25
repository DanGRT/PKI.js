'use strict';

var _ = require('lodash');

var _pkijs = {};
var common = require("./org/asn1js/common");
var commonpki = require("./org/pkijs/common");
var _asn1js = require("./org/asn1js/asn1");
var _x509_schema = require("./org/pkijs/x509_schema");
var _x509_simpl= require("./org/pkijs/x509_simpl");
var _pkcs12 = require("./org/pkijs/pkcs12_schema");
var _pkcs12_simpl = require("./org/pkijs/pkcs12_simpl");
var _cms_schema = require('./org/pkijs/cms_schema');
var _cms_simpl = require('./org/pkijs/cms_simpl');

var asn1js = _.merge(_asn1js, common);

_.merge(_x509_schema, asn1js);
_.merge(_x509_simpl, asn1js);
_.merge(_cms_simpl, asn1js);
_.merge(_cms_schema, asn1js);
_.merge(_pkcs12, asn1js);
_.merge(_pkcs12_simpl, asn1js);
_.merge(_pkcs12_simpl, _x509_simpl);
_.merge(_x509_simpl, _x509_schema);
_.merge(_cms_simpl, _x509_simpl);
_.merge(_cms_simpl, _cms_schema);
_.merge(_pkcs12_simpl, _cms_simpl);
_.merge(_pkcs12_simpl, _x509_simpl);

_.merge(_pkijs, commonpki);
_.merge(_pkijs, _pkcs12);
_.merge(_pkijs, _pkcs12_simpl);
_.merge(_pkijs, asn1js);

var pkijs = _pkijs.org.pkijs;

module.exports = pkijs;
