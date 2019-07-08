// flow.set('isoInput1', Math.random() + 11.0) interval comes from server
flow.set('isoInput2', Math.random() + 12.0)
flow.set('isoInput3', Math.random() + 13.0)
flow.set('isoInput4', Math.random() + 14.0)
flow.set('isoInput5', Math.random() + 15.0)
flow.set('isoInput6', Math.random() + 16.0)
flow.set('isoInput7', Math.random() + 17.0)
flow.set('isoInput8', Math.random() + 18.0)

msg.payload = [
    flow.get('isoInput1'),
    flow.get('isoInput2'),
    flow.get('isoInput3'),
    flow.get('isoInput4'),
    flow.get('isoInput5'),
    flow.get('isoInput6'),
    flow.get('isoInput7'),
    flow.get('isoInput8'),
]
return msg;