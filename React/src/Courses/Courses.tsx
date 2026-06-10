import { MainContainerContentStyle, MainContainerStyle } from "../UI/MainContainer/MainContainerStyle";
import { useTranslation } from "../i18n/LanguageContext";

const Courses = () => {
    const { t } = useTranslation();
    return (
        <MainContainerStyle>
        <title>{t.courses.title}</title>
        <MainContainerContentStyle>
            <h1>{t.courses.heading}</h1>
            <p>{t.courses.intro}</p>
            <hr />
            <h3>{t.courses.beginner_heading}</h3>
            <p>{t.courses.beginner_description}</p>
            <p><strong>{t.courses.goal_label} </strong>{t.courses.beginner_goal}</p>
            <p><strong>{t.courses.age_label} </strong>{t.courses.beginner_age}</p>
                <hr />

            <h3>{t.courses.intermediate_heading}</h3>
            <p>{t.courses.intermediate_description}</p>
            <p>{t.courses.intermediate_scales}</p>
            <p><strong>{t.courses.goal_label} </strong>{t.courses.intermediate_goal}</p>
            <p><strong>{t.courses.age_label} </strong>{t.courses.intermediate_age}</p>
            <hr />

            <h3>{t.courses.advanced_heading}</h3>
            <p>{t.courses.advanced_description}</p>
            <p>{t.courses.advanced_details}</p>
            <p>{t.courses.advanced_suits}</p>
            <p><strong>{t.courses.goal_label} </strong>{t.courses.advanced_goal}</p>
            <p><strong>{t.courses.age_label} </strong>{t.courses.advanced_age}</p>
        </MainContainerContentStyle>
        </MainContainerStyle>
    );
}
export default Courses;
