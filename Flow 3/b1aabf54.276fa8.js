msg.payload = {
    objectId: 'ns=1;i=1000',
    methodId: 'ns=1;i=1001',
    inputArguments: [
        {name: 'value1', dataType:'UInt32', value:msg.payload.value1},
        {name: 'value2', dataType:'UInt32', value:msg.payload.value2}
    ],
    methodType: 'basic'
}
return msg;