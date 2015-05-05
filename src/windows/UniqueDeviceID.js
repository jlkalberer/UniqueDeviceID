// Copyright (c) Microsoft Open Technologies, Inc.  Licensed under the MIT license. 

module.exports = {
    get: function(success, fail) {
        try {
            var ht = Windows.System.Profile.HardwareIdentification.getPackageSpecificToken(null);

            var reader = Windows.Storage.Streams.DataReader.fromBuffer(ht.id);
            var arr = new Array(ht.id.length);
            reader.readBytes(arr);

            var id = "";
            for (var j = 0; j < arr.length; j++) {
                id += arr[j].toString();
            }
            success(id);
        } catch(ex) {
            fail(ex);
        }
    }
};
require("cordova/windows8/commandProxy").add("UniqueDeviceID", module.exports);