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

7. Install: curl -s https://gist.githubusercontent.com/tejaswigowda/f289e9bff13d152876e8d4b3281142f8/raw/df37df2e16a3166e686357a045751a7c18bbeebe/installNodeMongoUbuntu16.04.sh  | bash

8.Test installation: node -v 
    <img width="258" alt="image" src="https://user-images.githubusercontent.com/67202291/218523011-9098f4aa-4dc8-4438-b7b2-0439d4d75052.png">

9. Edit Security Groups for this instance - I added my IP Address and port 1234
    <img width="882" alt="image" src="https://user-images.githubusercontent.com/67202291/219524531-2cad9ba5-ab54-4d33-91d8-b83917f3063a.png">

9. Clone your repository
    -login using your github username and personal access token
    <img width="505" alt="image" src="https://user-images.githubusercontent.com/67202291/219521940-8c79f7ea-8986-4402-9304-6e6ffb920fb8.png">

10. Navigate to your project
    <img width="295" alt="image" src="https://user-images.githubusercontent.com/67202291/219522190-f780c09e-29df-43b6-8cf9-b094afd72882.png">

11. Run your project: node server.js
    -see your project at the URL: [Instance Public IP Address]:[Port Number]
    <img width="1118" alt="image" src="https://user-images.githubusercontent.com/67202291/219525177-89e97c79-97e6-4e12-8210-8330c3a22eba.png">