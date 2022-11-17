import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button, Input } from "rsuite";
import { rawListeners } from "process";

const AnimeInfo = (props: any) => {
  const [recomendations, setRecomendations] = useState([]);
  const [anime, setAnime] = useState({
    title: "",
    synopsis: "",
    image_url: "",
    status: "",
    score: "",
    scored_by: "",
    season: "",
    year: "",
    studio: "",
    genres: [],
    title_jp: "",

    rank: "",
  });
  let params = useParams();
  useEffect(() => {
    axios
      .get(
        "https://api.jikan.moe/v4/anime/" +
          params.id +
          "/recommendations?limit=3"
      )
      .then((res) => {
        setRecomendations(res.data.data);
      });
    axios
      .get("https://api.jikan.moe/v4/anime/" + params.id + "/full")
      .then((res) => {
        console.log(res.data);

        const data = res.data.data;
        let genres: any = [];
        data.genres.map((genre: any) => {
          console.log(genre);
          genres.push(genre.name);
        });

        localStorage.setItem("episodes", data.episodes);
        setAnime({
          title: data.title,
          synopsis: data.synopsis,
          image_url: data.images.jpg.image_url,
          status: data.status,
          score: data.score,
          scored_by: data.scored_by,
          year: data.year,
          studio: data.studios[0].name,
          genres: genres,
          season: data.season,
          title_jp: data.title_japanese,
          rank: data.ranked_by,
        });
      });
  }, [params.id]);

  return (
    <section className="anime-details spad">
      <div className="container">
        <div className="anime__details__content">
          <div className="row">
            <div
              style={{
                backgroundColor: "#22212c",
                padding: "15px",
                borderRadius: "10px",
              }}
              className="col-lg-3"
            >
              <div
                style={{ backgroundImage: `url(${anime.image_url})` }}
                className="anime__details__pic set-bg"
              ></div>
              <div style={{ textAlign: "center" }}>
                <div style={{ marginTop: "20px" }}>
                  <Link
                    to={`/watch/${anime.title
                      .replaceAll(" ", "-")
                      .replaceAll(":", "")
                      .replaceAll(";", "-")
                      .replaceAll("(", "")
                      .replaceAll(")", "")}/1`}
                  >
                    <Button appearance="primary">Watch Now</Button>
                  </Link>
                </div>

                <div className="warning-btn" style={{ marginTop: "20px" }}>
                  <Button color="blue" appearance="ghost">
                    Add to list
                  </Button>

                  <div style={{ marginTop: "20px" }}>
                    <Button color="red" appearance="ghost">
                      {" "}
                      Add to favorites
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="anime__details__text">
                <div
                  className="anime__details__title"
                  style={{
                    backgroundColor: "#22212c",
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <h3 style={{ textAlign: "left" }}>{anime.title}</h3>
                  <span style={{ textAlign: "left" }}>
                    {anime.title_jp}, {anime.title}
                  </span>
                </div>
                <div className="anime__details__rating"></div>
                <p
                  style={{
                    backgroundColor: "#22212c",
                    padding: "15px",
                    borderRadius: "10px",
                    textAlign: "left",
                  }}
                >
                  {anime.synopsis}
                </p>
                <div className="anime__details__widget">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <ul
                        style={{
                          textAlign: "left",
                          backgroundColor: "#22212c",
                          padding: "15px",
                          borderRadius: "10px",
                        }}
                      >
                        <li>
                          <span>Type:</span> TV Series
                        </li>
                        <li>
                          <span>Studios:</span> {anime.studio}
                        </li>
                        <li>
                          <span>Date aired:</span> {anime.year}
                        </li>
                        <li>
                          <span>Status:</span> {anime.status}
                        </li>
                        <li>
                          <span>Genre:</span>
                          {anime.genres[0]}, {anime.genres[1]}
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <ul
                        style={{
                          textAlign: "left",
                          backgroundColor: "#22212c",
                          padding: "15px",
                          borderRadius: "10px",
                        }}
                      >
                        <li>
                          <span>Scores:</span> {anime.score}
                        </li>
                        <li>
                          <span>Rank:</span> 8.5 / 161 times
                        </li>
                        <li>
                          <span>Duration:</span> 24 min/ep
                        </li>
                        <li>
                          <span>Quality:</span> HD
                        </li>
                        <li>
                          <span>Views:</span> 131,541
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "left" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="anime__details__review">
              <div className="section-title">
                <h5>Reviews</h5>
              </div>
              <div className="anime__review__item">
                <div className="anime__review__item__pic">
                  <img src={anime.image_url} alt="" />
                </div>
                <div
                  className="anime__review__item__text"
                  style={{ backgroundColor: "#22212c", textAlign: "left" }}
                >
                  <h6>
                    Chris Curry - <span>1 Hour ago</span>
                  </h6>
                  <p>
                    whachikan Just noticed that someone categorized this as
                    belonging to the genre "demons" LOL
                  </p>
                </div>
              </div>
              <div className="anime__review__item">
                <div className="anime__review__item__pic">
                  <img src={anime.image_url} alt="" />
                </div>
                <div
                  className="anime__review__item__text"
                  style={{ backgroundColor: "#22212c", textAlign: "left" }}
                >
                  <h6>
                    Lewis Mann - <span>5 Hour ago</span>
                  </h6>
                  <p>Finally it came out ages ago</p>
                </div>
              </div>
              <div className="anime__review__item">
                <div className="anime__review__item__pic">
                  <img src={anime.image_url} alt="" />
                </div>
                <div
                  className="anime__review__item__text"
                  style={{ backgroundColor: "#22212c", textAlign: "left" }}
                >
                  <h6>
                    Louis Tyler - <span>20 Hour ago</span>
                  </h6>
                  <p>Where is the episode 15 ? Slow update! Tch</p>
                </div>
              </div>
              <div className="anime__review__item">
                <div className="anime__review__item__pic">
                  <img src={anime.image_url} alt="" />
                </div>
                <div
                  className="anime__review__item__text"
                  style={{ backgroundColor: "#22212c", textAlign: "left" }}
                >
                  <h6>
                    Chris Curry - <span>1 Hour ago</span>
                  </h6>
                  <p>
                    whachikan Just noticed that someone categorized this as
                    belonging to the genre "demons" LOL
                  </p>
                </div>
              </div>
              <div className="anime__review__item">
                <div className="anime__review__item__pic">
                  <img src={anime.image_url} alt="" />
                </div>
                <div
                  className="anime__review__item__text"
                  style={{ backgroundColor: "#22212c", textAlign: "left" }}
                >
                  <h6>
                    Lewis Mann - <span>5 Hour ago</span>
                  </h6>
                  <p>Finally it came out ages ago</p>
                </div>
              </div>
              <div className="anime__review__item">
                <div className="anime__review__item__pic">
                  <img src={anime.image_url} alt="" />
                </div>
                <div
                  className="anime__review__item__text"
                  style={{ backgroundColor: "#22212c", textAlign: "left" }}
                >
                  <h6>
                    Louis Tyler - <span>20 Hour ago</span>
                  </h6>
                  <p>Where is the episode 15 ? Slow update! Tch</p>
                </div>
              </div>
            </div>
            <div className="">
              <h5 style={{ color: "white", marginBottom: "30px" }}>
                Your Comment
              </h5>

              <Input as="textarea" rows={10} placeholder="Textarea" />
            </div>
          </div>

          <div className=" col-md-4" style={{ textAlign: "center" }}>
            <h5 style={{ marginBottom: "50px", color: "white" }}>
              Recommenend animes
            </h5>

            <div className="anime__details__sidebar">
              <div className=""></div>
              {recomendations.slice(0, 3).map((recommendation: any) => {
                return (
                  <div className="card">
                    <div className="cover">
                      <img
                        src={recommendation.entry.images.jpg.image_url}
                        alt="cover"
                      />
                      <div className="play-icon">
                        <i className="fa fa-play"></i>
                      </div>
                    </div>
                    <div className="card-content">
                      <p style={{ color: "white", fontSize: "12px" }}>
                        {recommendation.entry.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeInfo;
