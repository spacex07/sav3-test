todo next
---------
make /post page to be able to see parent posts, and reply posts

todo before finished prototype
------------------------------
import/export private key
reply
like
resav3
share
more than 5 posts per user
feed of moderated bootstrapped users (from a google sheet)

todo after prototype
--------------------
reply notification
like notification
resav3 notification

possible way to do likes
------------------------
possibly use pubsub for likes/retweets counts, but only display the usernames of people in your follow circle so people dont have incentive to spam, possibly use cloudflare country api to get own ip and country, and include it in the like/retweet count statistics?

possible data in sav3
----
post: a post or reply to a post
post.cid
post.parentPostCid: cid of post replying to
post.previousPostCid: cid of previous post (to be able to iterate through all)
post.userCid: cid of publisher (to be able to get profile)
post.contentCid: cid of content (max 140 chars)
post.timestamp: seconds

profile: the profile of a user
profile.diplayNameCid
profile.descriptionCid
profile.thumbnailUrlCid

saves
array of user and post cids saved

ipnsData
profileCid
lastPostCid
saves
isTerminated (possibly use ethereum for this so that it never gets unterminated)

possible fancy names: 
"player" instead of "user"
"???" instead of "profile"
"logs" instead of "post"

possible indexeddb modules

https://www.npmjs.com/package/idb
https://www.npmjs.com/package/dexie
https://www.npmjs.com/package/level-js
