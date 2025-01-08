import React from "react";

const OurProcss: React.FC = () => {
  const stepsData = [
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/71d5/9506/50dc026ce12a98dc6e836d992646e8b0?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I95Ljb0LVzISccA28l3PsZDtrjDqlWv9uyq205xOswQdjtRG92N1QwjdRiSjZBJYkauPqIUD7XzIpzVfV3NTtZQ8TghC1x0VRydVJjM3pqpKJMvYHlAoj-O0cqTMdbJnZvZRJpYquT1qWYTZ6F9vHutD8QmOQem6C4pYjgfhJlibCffEAsOh8kDTH7JCT-TLn~Q2SlWlrj1n6yvcvs5tOp5LOvzjjZk6WmW7pnyxgf4znjZXn~7CZL68QB9rjJ07Cb5QeJG9dyX1uHlpUwbabaf9bR0xYGK9BZwAHRKkGGCUmuulItxedFDssO7ldBubqowTdBMZeLwmLfVRAQC0-Q__",
      head: "Step 1: Select your dream model",
      para: "elegance, choose what resonates with you.",
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/1b8c/2ebb/15c88cd61da0ecbeb9f6a4a6d8ec13b1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqAnJ0vhuM2ECU4UpzaiqU0o5FcoE05O42MuFZLcfHZM12z06WT1AANM5npMJ~25IT2tj2l-34ykNaaIZcsYtHNzYYfG0Gl0-RsZI3BwCGNNTGFzvaWDn6vs-0KYNwnbYLVr3YsDs~tamQASfoqaO9Zm775GU5Y~ObXf5DT6HgwakICDVauetHJJEbCInnh9uti6YF7GrjFd4ukJkP-ssOTpzsnjUetU-tudn1OHefKfzukELbYw5Ia4hVCcgPZYStsjMAzg-y50yXK28oa54dRVlQSstGTEuj2dCPXIOYrXmWfez9f6CCil7MWD4eJlHpm50piXP5W15vl4ngfPhA__",
      head: "Step 2: Customize to your requirement",
      para: "as rich woods, luxurious fabrics, and robust",
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/329f/a842/4b5dfa67130d242c3e12026cb43b95c0?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AD1K71VXoExzsBOCMYkzb7D~pZR6G-bOes4DVvpAKK2vPR09OEnAtti9Lw786eF7vJ9Lr8BP9qUn5g2~5Nxsl5f6gwxZscZYD7tx-37IfsKYSJFuAERFdFjXiE4RuluMFi7VttO2~zjrkkCvxwDkMpDVSvT5G643CwXqTA8OEi46QArHu-5MF17l5eGYNhtdeAn6rvJsd4vIcfWKnKxPJ2dQ-ZDz2ie1Qcd4CHvBPTqPGehKWqDQ2nM2TWqZJkBK4Sj4Bg8hvQJ2FDwyFy3w7bAc0lWJGQrFcv3Mq9wLv0EdK-IqI~UVZHQInw5Vl97W8Z9XvW8E4xkjJRVcHwltdQ__",
      head: "Step 3: Order confirmation",
      para: "Accurate measurements ensure your furniture",
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/a73e/f206/26effcd84f7b413cfcfe8c582f0f0019?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C88thAkoW5cMa2KrhBpi~YHNBfnbaZa0ogrl3y04OeYAZg-MkYv0pwDWoBJ~ArUu1gPBkA6XgRgb-bnXoe82MgEX3lTZ-DBs8w-bECOv7NRd7h9llQQTdqDKVChfw4hFNvCfSqd7QX4SO67TOB2O80TSBJVZFBWmmuICO9yyzIE8K3OkwwDeymBa81D1gVxNyOPf-Iqi-QM6oXjal7Zpr7-2OWYdNM~LU~hKjiIBU1UmJ6Hqk~NwFx4BVFDiZ8~OeI3V6TDsdtWFpytc9uCX4BnyZHVAGwTbRMk6OwG6a5PviB5C7NOdQqNFAqPrhIOf60jGpLlXVAioSOwzI-kCYQ__",
      head: "Step 4: Quality check",
      para: "installation services with every purchase.",
    },

    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/beb5/9753/1f3e61ca1880d2cf00db36420cdc6c9b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AHEEAn1lvDwjM9W09W9Yw33X9hGH-x7D9YeE34~79Bfe6~PutAHJXqRbivpIF~29r2km-CiaaN94zMZWBV~nvebMCdfsjlnXUa91ZFeolLo9g29JyXtsqRh6LSVgRjo-AqXBMLXZbfTNWHOdfdZXFqSiuNpyEOj8dVzBQzsUqziBXfCrkXMvLxGvPjW0M7fZQ43uZJU5AAEMq--zvn82WwBTm7H9LO07XikIJyefGqkuPsMqOWWblvoHmeVy43YNC-8i31IlekmhR0tzjcAK-j0po0PYefDsiK4EbR3FXPKUch1Qd7nZaEy13gTm2ZhjVK-QanwUUOBa4EKE6YrU-g__",
      head: "Step 5: Order processing",
      para: "to ensure all details are correct before moving",
    },

    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/a521/7d5a/374d2413f630d3fc70fc0bff87623517?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTnzmGLrFzPAk1J8szDz77QyWVhQN1CfUvCJlA9E1p2G3CRPLNyW8X5P~YCLp3X-CV5Y5LLdyyS5MoPMC8dDDi8CxI-p3ru4eUTqlbuEk-XJh1-E1RJgyzR60OS595D26YRc59Nzm~muOl9HBDtvlvbR8UU~XGerM4HTRP0QhIQ0OPflDngg~4ChBwkqFLU2qrxMCRHqG7WJc9z0oyUmEdyzSSwntMJ0xB34LHuBRdZ5y-dqb6Bcq8CK5ANLcGY0SOKLO7EIcyr89O3s6SyhYlcDNSlSNL3VlmiL0bqB4iiVovK6JURCrlI7PHOENpwxm-0KC~amJ7jhUkKl4EEJrQ__",
      head: "Step 6: Delivery",
      para: "satisfaction with every piece you choose.",
    },
  ];
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-black text-3xl text-center font-bold">Our Process</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-4 rounded-lg "
          >
            {/* Image */}
            <img
              src={item.imgUrl}
              alt={item.head}
              className="w-1/3 rounded-lg object-cover"
            />
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {item.head}
              </h2>
              <p className="text-gray-600 text-sm">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurProcss;
