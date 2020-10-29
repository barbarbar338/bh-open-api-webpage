import { Link } from "react-router-dom";
import BannerImage from "../../images/banner.png";

export default function Banner() {
    return (
        <section className="text-center mg-auto pd-1-5">
            <img src={BannerImage} width="500" alt="Banner" />
            <h1>Brawlhalla Open API</h1>
            <p className="lead">
                An unofficial API server with no connection to Brawlhalla and
                its developers, prepared for easier and unlimited access to
                Brawlhalla API services.
            </p>
            <Link className="btn btn-lg btn-outline-primary" to="/features">
                See Features
            </Link>
        </section>
    );
}
