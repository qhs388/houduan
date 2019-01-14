const env = require('./env')


let resUrl
let mp3FilePath
if(env === 'dev'){
  resUrl = 'http://127.0.0.1:8081'
  mp3FilePath = 'D:/nginx-1.15.7/resource/mp3'
}else if (env === 'prod'){
  resUrl = 'http://106.14.201.210'
  mp3FilePath = '/root/nginx/upload/mp3'
}




const category = [
  'Biomedicine',
  'BusinessandManagement',
  'ComputerScience',
  'EarthSciences',
  'Economics',
  'Engineering',
  'Education',
  'Environment',
  'Geography',
  'History',
  'Laws',
  'LifeSciences',
  'Literature',
  'SocialSciences',
  'MaterialsScience',
  'Mathematics',
  'MedicineAndPublicHealth',
  'Philosophy',
  'Physics',
  'PoliticalScienceAndInternationalRelations',
  'Psychology',
  'Statistics'
]









module.exports = {
  resUrl,
  category,
  mp3FilePath
}