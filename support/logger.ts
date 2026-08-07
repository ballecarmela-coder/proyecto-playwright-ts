import {step} from 'allure-js-commons'

export class Logger{
    static async logStep(description: string){
        await step(description, () => {})
    }

    static async logVerification(description: string){
        await step(description, () => {})
    }

    static async logPreCondition(description: string){
        await step(description, () => {})
    }

    static async logPostCondition(description: string){
        await step(description, () => {})
    }
}