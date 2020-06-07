export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-central-1",
      BUCKET: "notes-app-uploads-h36d"
    },
    apiGateway: {
      REGION: "eu-central-1",
      URL: "https://5l52i5sb3f.execute-api.eu-central-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-central-1",
      USER_POOL_ID: "eu-central-1_AuXgLbTFK",
      APP_CLIENT_ID: "1eme4e8kav7rsnonec9739rtqb",
      IDENTITY_POOL_ID: "eu-central-1:977ccd16-1160-4c33-bc6a-927fe135fc05"
    }
  };
  