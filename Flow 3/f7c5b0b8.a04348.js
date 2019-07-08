var resultValue = msg.payload[0].outputArguments[0].value[0];
msg.payload = resultValue;
return msg;