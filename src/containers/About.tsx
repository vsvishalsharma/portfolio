import { useEffect, useState } from 'react';
import { HeroImage, ListItem, Wrapper, Link } from '../components';
import { getSectionAnimation } from '../animations';
import { aboutSection, author } from '../utils/portfolio';
import { getId } from '../utils/helper';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Vishal Sharma, a full stack
            web developer who wants to explore every tech stack.
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at a
            start-up -{' '}
            <Link
              href="https://credebl.id/"
              target="_blank"
              className="text-accent"
            >
              Credebl
            </Link>
            .
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
