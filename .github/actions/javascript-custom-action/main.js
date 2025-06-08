const core = require('@actions/core');
const exec = require('@actions/exec');

(function main() {
    // Get inputs from the action
    const bucketName = core.getInput('bucket' , {
        required: true
    })
    const bucketRegion = core.getInput('bucket-region', {
        required: true,
    });
    const distFolder = core.getInput('dist-folder', {
        required: true  
    });


    exec.exec('aws s3 sync', [
        distFolder,
        `s3://${bucketName}`,
        '--region',
        bucketRegion,
        '--delete',
    ]).then(() => {
        core.info(`Successfully synced ${distFolder} to s3://${bucketName}`);
    }).catch((error) => {
        core.setFailed(`Failed to sync to S3: ${error.message}`);
    });


    core.notice('This is a custom JavaScript action running in Node.js 22.');
})();