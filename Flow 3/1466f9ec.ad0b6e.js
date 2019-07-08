var today = new Date().toLocaleString();
msg.payload = "Temperature with "+msg.payload+" ° Celsius exceeded at "+today; 
return msg;