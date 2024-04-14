const Support = () => {
  return (
    <div className="support-div">
      <h2 className="support">
        Supporting artists
        <br />
        around the globe
      </h2>
      <p>
        Soundstripe was founded by three musicians, so supporting
        <br />
        artists is fundamental to how we do business. To date,
        <span>
          we've
          <br />
          employed over 150 musicians
        </span>{" "}
        to help them make a living
        <br />
        doing what they love. When artists thrive, we all win.
      </p>
      <div className="stats">
        <div className="creators">
          <h3>$7M for Creators</h3>
          <p>
            Over $7M generated for creators
            <br />
            through royalties and salaries
          </p>
        </div>
        <div className="sync">
          <h3>10M Sync</h3>
          {window.innerWidth > 720 && (
            <p>
              {`Over 10M sync licenses issued for${
                window.innerWidth >= 721 ? <br /> : ""
              }commercials, videos, & more.`}
            </p>
          )}
          {window.innerWidth < 720 && (
            <p>
              Over 10M sync licenses issued for <br /> commercials, videos, &
              more.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;
