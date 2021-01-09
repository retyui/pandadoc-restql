const DataLoader = require('dataloader')

Promise.resolve(1).then(() => {
		console.log(' --- Promise.resolve(1).then')

		Promise.resolve(2).then(() => {
		console.log(' --- Promise.resolve(2).then')
	})
	})

const myBatchGetUsers= (keys) => {
//console.log(' --- keys', keys)
const map = [
	{invitedByID: keys[0] + 1, lastInvitedID: keys[1] + 10 },
	{invitedByID: keys[0] + 100, lastInvitedID: keys[1] + 1000 }
]

	return Promise.resolve(map.slice(0,keys.length))
}

const userLoader = new DataLoader(keys => myBatchGetUsers(keys))

userLoader.load(1).then(user1 => {
	console.log(' --- user1', user1)
    userLoader.load(user1.invitedByID).then(invitedBy => console.log(' --- invitedBy',invitedBy))
});


userLoader.load(2).then(user2 => {
	console.log(' --- user2', user2)

	userLoader.load(user2.lastInvitedID).then(lastInvitedID => console.log(' --- lastInvitedID',lastInvitedID))
});

	console.log(' --- main')
