// flow.set('isoOutput1', Math.random() + 1.0) interval comes from server
flow.set('isoOutput2', Math.random() + 2.0)
flow.set('isoOutput3', Math.random() + 3.0)
flow.set('isoOutput4', Math.random() + 4.0)
flow.set('isoOutput5', Math.random() + 5.0)
flow.set('isoOutput6', Math.random() + 6.0)
flow.set('isoOutput7', Math.random() + 7.0)
flow.set('isoOutput8', Math.random() + 8.0)

msg.payload = [
    flow.get('isoOutput1'),
    flow.get('isoOutput2'),
    flow.get('isoOutput3'),
    flow.get('isoOutput4'),
    flow.get('isoOutput5'),
    flow.get('isoOutput6'),
    flow.get('isoOutput7'),
    flow.get('isoOutput8'),
]
return msg;