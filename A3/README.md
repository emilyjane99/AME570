Host the single page resume you created on your Amazon EC2 server running Node.js.

1. Open AWS Sandbox
2. Start Lab
3. Wait for AWS connection (green)
4. Select AWS
    <img width="989" alt="image" src="https://user-images.githubusercontent.com/67202291/218515647-c3d19957-3c54-4be0-861b-98b3a01af496.png">
5. Create a new EC2 Instance -> Launch Instance
    -name: assignment3
    -ubuntu 20.04 free tier
    -proceed without a key pair
    -28 GiB
    -launch instance

6. Select and Connect to this instance
    <img width="919" alt="image" src="https://user-images.githubusercontent.com/67202291/218517006-d505e752-ba15-4f6c-b153-b3789fdb1dcb.png">
    <img width="659" alt="image" src="https://user-images.githubusercontent.com/67202291/218521828-c0ecfd6d-9536-4d13-beac-57083859dca7.png">
7. Install node/mongo: curl -s https://gist.githubusercontent.com/tejaswigowda/f289e9bff13d152876e8d4b3281142f8/raw/df37df2e16a3166e686357a045751a7c18bbeebe/installNodeMongoUbuntu16.04.sh  | bash
8.Test installations: node -v 
<img width="258" alt="image" src="https://user-images.githubusercontent.com/67202291/218523011-9098f4aa-4dc8-4438-b7b2-0439d4d75052.png">
<img width="1089" alt="image" src="https://user-images.githubusercontent.com/67202291/218536370-21dc1b3f-ced4-4afc-a82f-8a8ea9af0d93.png">
9. sudo service mongod start
10.Edit your security group for this instance
    -go toSECURITY
		-SECURITY GROUPS
			-EDIT INBOUND RULES
				-NEW RULE
					-PORT 27017
					-MY IP ADDRESS
    <img width="887" alt="image" src="https://user-images.githubusercontent.com/67202291/218539706-cd1a8066-37fb-4952-8b92-9d3ad8059d33.png">
11.Edit the configuration file
    -EDIT MONGO CONFIGURATION FILE
        -sudo vi /etc/mongod.conf
        NAVIGATE		-arrow down to network interfaces
        INSERT			-i to insert
                            -bindIp 0.0.0.0  to allow all traffic
        STOP INSERT		-esc to stop inserting
					SAVE AND EXIT	shift zz to save and exit
    <img width="480" alt="image" src="https://user-images.githubusercontent.com/67202291/218541115-6c47cd3e-1636-45eb-a41f-5030994d1654.png">
12. Restart: sudo service mongod restart
13. Open a new connection in Mongo Compass using: mongodb://54.191.235.86:27017/ 
    -note: replace with your vm ip address
    <img width="321" alt="image" src="https://user-images.githubusercontent.com/67202291/218544078-bef0c1a0-c83c-42f0-ad23-b8a390a5260b.png">
    <img width="506" alt="image" src="https://user-images.githubusercontent.com/67202291/218544281-1e8c657c-98e0-42df-bd99-70d255f9cca2.png">
14. Open your project


