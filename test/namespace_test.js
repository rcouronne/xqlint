'use strict';

var vows = require('vows');
var assert = require('assert');
var fs = require('fs');

var XQLint = require('../lib/XQLint').XQLint;

vows.describe('Test Namespace declarations').addBatch({
    'test XQST0047 (1)': function(){
        var linter = new XQLint('test', fs.readFileSync('test/xqlint_queries/namespaces/1.xq', 'utf-8'));
        var markers = linter.getMarkers();
        assert.equal(markers.length, 1, 'Number of markers');
        var error = markers[0];
        assert.equal(error.type, 'error', 'Type of marker');
        assert.equal(error.message.indexOf('[XQST0047]'), 0, 'Is Error [XQST0047]');
        //TODO: check position
        //console.log(error);
    },
    
    'test XQST0047 (2)': function(){
        var linter = new XQLint('test', fs.readFileSync('test/xqlint_queries/namespaces/2.xq', 'utf-8'));
        var markers = linter.getMarkers();
        assert.equal(markers.length, 1, 'Number of markers');
        var error = markers[0];
        assert.equal(error.type, 'error', 'Type of marker');
        assert.equal(error.message.indexOf('[XQST0047]'), 0, 'Is Error [XQST0047]');
    },
    
    'test XQST0047 (3)': function(){
        var linter = new XQLint('test', fs.readFileSync('test/xqlint_queries/namespaces/mainModule6.xq', 'utf-8'));
        var markers = linter.getMarkers();
        assert.equal(markers.length, 1, 'Number of markers');
        var error = markers[0];
        assert.equal(error.type, 'error', 'Type of marker');
        assert.equal(error.message.indexOf('[XQST0047]'), 0, 'Is Error [XQST0047]');
    },
    
    'test XQST0033  (1)': function(){
        var linter = new XQLint('test', fs.readFileSync('test/xqlint_queries/namespaces/3.xq', 'utf-8'));
        var markers = linter.getMarkers();
        assert.equal(markers.length, 1, 'Number of markers');
        var error = markers[0];
        assert.equal(error.type, 'error', 'Type of marker');
        assert.equal(error.message.indexOf('[XQST0033]'), 0, 'Is Error [XQST0033]');
    },
    
    'test XQST0088  (1)': function(){
        var linter = new XQLint('test', fs.readFileSync('test/xqlint_queries/namespaces/mainModule7.xq', 'utf-8'));
        var markers = linter.getMarkers();
        assert.equal(markers.length, 1, 'Number of markers');
        var error = markers[0];
        assert.equal(error.type, 'error', 'Type of marker');
        assert.equal(error.message.indexOf('[XQST0088]'), 0, 'Is Error [XQST0088]');
    },
    
    'test XQST0088  (2)': function(){
        var linter = new XQLint('test', fs.readFileSync('test/xqlint_queries/namespaces/noTns.xq', 'utf-8'));
        var markers = linter.getMarkers();
        assert.equal(markers.length, 1, 'Number of markers');
        var error = markers[0];
        assert.equal(error.type, 'error', 'Type of marker');
        assert.equal(error.message.indexOf('[XQST0088]'), 0, 'Is Error [XQST0088]');
    }
    
    
}).export(module);