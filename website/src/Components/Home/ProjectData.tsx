import JavascriptLogo from '../../Logos/JavascriptLogo';
import HtmlLogo from '../../Logos/HtmlLogo';
import ReactLogo from '../../Logos/ReactLogo';
import CssLogo from '../../Logos/CssLogo';
import ReduxLogo from '../../Logos/ReduxLogo';
import FirebaseLogo from '../../Logos/FirebaseLogo';
import MaterialUiLogo from '../../Logos/MaterialUiLogo';
import ExpressLogo from '../../Logos/ExpressLogo';
import MongoDbLogo from '../../Logos/MongoDbLogo';
import AwsLogo from '../../Logos/AwsLogo';
import TypescriptLogo from '../../Logos/TypescriptLogo';

export interface IProjectData {
    title: string;
    imageTitle: string;
    imageUrl: string;
    description: string;
    githubLink: string;
    website: string;
    flexDirection?: string | any;
    techUsed: any[]
}

const ProjectData: IProjectData[] = [
    {
        title: 'LinkedIn Learning Clone',

        imageTitle: 'Linked Learning',

        // imageUrl: "https://kartik-yadav-portfolio.s3.ap-south-1.amazonaws.com/Project/ProjectGifs/LinkedInLearning.gif",

        imageUrl: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2Fgif's%2FLinkedIn%20Learning.gif?alt=media&token=0259f0e6-98df-41a0-9101-7c383fa899c2",

        description: 'It is an e-Learning Platform. Here a user can access all the course on single subscription(using stripes). The user can search for the desired course. Also the user can become an instructor and upload videos (aws-s3).',

        website: "https://linked-learning-project.web.app/",

        githubLink: 'https://github.com/ashish8796/linkedin-learning-clone',

        techUsed: [ <ReactLogo boxWidth='50px' boxHeight='50px' />, 
                    <ReduxLogo boxWidth='50px' boxHeight='50px' />,
                    <MaterialUiLogo boxWidth='50px' boxHeight='50px' />,
                    <ExpressLogo width='50px' height='50px' fontSize='7px' jsFontSize='9px' />,
                    <MongoDbLogo boxWidth='50px' boxHeight='50px' />,
                    <AwsLogo boxWidth='50px' boxHeight='50px' />,
                    <TypescriptLogo width='50px' height='50px' variant='h5' /> ]
    },
    {
        title: 'Indeed Clone',

        imageTitle: 'Indeed',

        // imageUrl: 'https://kartik-yadav-portfolio.s3.ap-south-1.amazonaws.com/Project/ProjectGifs/Indeed.gif',

        imageUrl: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2Fgif's%2FIndeed%20GIF.gif?alt=media&token=747f1411-38b1-4cbc-8427-ee81daa0b95d",

        description: 'It is an online job portal where a job-seeker can search for jobs depending upon the category or location or both. There is an admin portal where admin have access to all jobs and recruiter. The admin can add or delete any job or recruiter.',

        githubLink: 'https://github.com/rao-kartik/Indeed-Clone',

        website: "https://teamberyllium-indeedclone.web.app/",

        flexDirection: 'row-reverse',

        techUsed: [ <ReactLogo boxWidth='50px' boxHeight='50px' />, 
                    <ReduxLogo boxWidth='50px' boxHeight='50px' />,
                    <FirebaseLogo boxWidth='50px' boxHeight='50px' />,
                    <MaterialUiLogo boxWidth='50px' boxHeight='50px' /> ]
    },
    /* {
        title: 'Railyatri Clone',

        imageTitle: 'railyatri',

         imageUrl: 'https://s3.console.aws.amazon.com/s3/object/kartik-yadav-portfolio?region=ap-south-1&prefix=Project/ProjectGifs/railyatri.gif',

         imageUrl: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2Fgif's%2Frailyatri.gif?alt=media&token=b492664a-6b0c-421a-92f4-e3e9a96da75b",

        description: 'It is an online e-ticketing platform. Implement the bus-ticket booking platform. The user can search for buses according to desired location and date. On successful search the user can look for buses and depending upon the suitability book a seat of his choice in his desired bus.',

        website: "",

        githubLink: 'https://github.com/rao-kartik/railyatri-clone',

        techUsed: [ <ReactLogo boxWidth='50px' boxHeight='50px' />, 
                    <ReduxLogo boxWidth='50px' boxHeight='50px' />,
                    <MaterialUiLogo boxWidth='50px' boxHeight='50px' />,
                    <ExpressLogo width='50px' height='50px' fontSize='7px' jsFontSize='9px' />,
                    <MongoDbLogo boxWidth='50px' boxHeight='50px' />,
                    <TypescriptLogo width='50px' height='50px' variant='h5' /> ]
    }, */
    {
        title: 'Himalaya Clone',

        imageTitle: 'Himalaya',

        // imageUrl: 'https://kartik-yadav-portfolio.s3.ap-south-1.amazonaws.com/Project/ProjectGifs/Himalaya.gif',

        imageUrl: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2Fgif's%2FHimalaya.gif?alt=media&token=6590e19d-327e-497a-a617-92c373d3a19c",

        description: 'It is a herbal product e-commerce website. The user can search for the products and add the desired product in cart and make the payment after successful login.',

        githubLink: 'https://github.com/rao-kartik/himalaya-clone',

        website: "https://rao-kartik.github.io/himalaya-clone/",

        techUsed: [ <JavascriptLogo width='50px' height='50px' variant='h5' />, 
                    <HtmlLogo boxWidth='50px' boxHeight='50px' svgWidth='80%' />,
                    <CssLogo boxWidth='50px' boxHeight='50px' svgWidth='80%' /> ]
    },
    {
        title: 'Chargebee Clone',

        imageTitle: 'Chargebee',

        // imageUrl: 'https://kartik-yadav-portfolio.s3.ap-south-1.amazonaws.com/Project/ProjectGifs/Chargebee.gif',

        imageUrl: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2Fgif's%2FChargeebee.gif?alt=media&token=4716b057-0d7d-41f6-9c7f-8689500bf59a",

        description: 'It is a subscription management system which can help you handle all the aspects of the subscription life cycle including recurring billing, invoicing and trial management for your customers.',

        githubLink: 'https://github.com/rao-kartik/chargeebee-clone',

        website: "https://rao-kartik.github.io/chargeebee-clone/",

        flexDirection: 'row-reverse',

        techUsed: [ <JavascriptLogo width='50px' height='50px' variant='h5' />, 
                    <HtmlLogo boxWidth='50px' boxHeight='50px' svgWidth='80%' />, 
                    <CssLogo boxWidth='50px' boxHeight='50px' svgWidth='80%' /> ]
    },
]

export default ProjectData;