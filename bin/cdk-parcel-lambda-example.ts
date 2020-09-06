#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import 'source-map-support/register';
import { CdkParcelLambdaExampleStack } from '../lib/cdk-parcel-lambda-example-stack';

const app = new cdk.App();
new CdkParcelLambdaExampleStack(app, 'CdkParcelLambdaExampleStack');
