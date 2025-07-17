#!/usr/bin/bash

function deploy() {

    echo -e "\n >> Let's archive your function ..."
    sleep 1

    rm -r function.zip
    zip -9 function.zip ./ -r -x 'layer/*'

    echo -e "\n >> Deploying function to AWS ..."

    aws lambda update-function-code \
        --function-name my_function \
        --zip-file fileb://function.zip

    # checkng the SUCCESS exit program
    if [ $? -eq 0 ]
    then
        echo -e "\n >> Function deployed successfully! :D"
    else
        echo -e "\n >> Error Deploying function :("
    fi

}

# implementing of the function
# for use please, execute 'bash [THIS FUNCTION NAME]'
deploy
