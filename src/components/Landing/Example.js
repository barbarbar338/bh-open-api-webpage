import { Component } from "react";
import { toast } from "react-toastify";
import CONFIG from "../../config";

export default class Example extends Component {
    state = {
        query: "stats/id?brawlhalla_id=3145331",
        response: JSON.stringify(
            {
                foo: "bar",
            },
            null,
            4,
        ),
    };
    handleQueryChange = (e) => {
        this.setState({
            query: e.target.value,
        });
    };
    handleButtonClick = async (e) => {
        if (!this.state.query || this.state.query.length < 1)
            return this.createErrorToast("Specify a request query");
        const request = await fetch(`${CONFIG.API_URL}${this.state.query}`);
        const response = await request.json();
        if (!request.ok) return this.createErrorToast(response.message);
        this.setState({
            response: JSON.stringify(response, null, 4),
        });
        this.createSuccessToast(this.state.query);
    };
    createErrorToast(str) {
        return toast.error(`⛔ ${str}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    createSuccessToast(str) {
        return toast.success(`✅ ${str}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    render() {
        return (
            <section className="pd-1-5">
                <h2 className="text-center">Example</h2>
                <p className="text-center lead">
                    See docs:{" "}
                    <a href="https://brawlhalla-docs.bariscodes.me/" rel="noreferrer" target="_blank">
                        Click me!
                    </a>
                </p>
                <div className="row row-cols-2">
                    <div className="col">
                        <h3>Request Input</h3>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">api/</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Route"
                                defaultValue="stats/id?brawlhalla_id=3145331"
                                className="form-control"
                                onChange={this.handleQueryChange}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={this.handleButtonClick}
                                >
                                    Make Request
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3>Response</h3>
                        <textarea
                            rows="10"
                            className="form-control rounded-0"
                            value={this.state.response}
                            readOnly
                        />
                    </div>
                </div>
            </section>
        );
    }
}
