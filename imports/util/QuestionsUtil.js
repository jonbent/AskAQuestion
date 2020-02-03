import {QuestionsCollection} from '/imports/api/questions';
export const createQuestion = (userId) => {
    const question = {userId, created: new Date(), resolved: false};
    try{
        QuestionsCollection.schema.validate(question);
        QuestionsCollection.insert(question)
        return true
    } catch (e) {
        return false
    }
}