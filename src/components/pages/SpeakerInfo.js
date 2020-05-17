import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from '../layout/Avatar';
import Button from '../layout/Button';
import avatar1 from '../../assets/speaker1.png';
import avatar2 from '../../assets/speaker2.png';
import avatar3 from '../../assets/speaker3.png';
import avatar4 from '../../assets/speaker4.png';
import avatar5 from '../../assets/speaker5.png';

const SPEAKERS = [
  {
    id: 0,
    spkImg: avatar1,
    occupation: 'Director',
    name: 'Peter Gregory',
    description:
      'Lorem ipsum dolor sit amet, qui no bonorum lucilius accusata, ei mel tollit partiendo, vis at facete mentitum inciderint. Ridens tritani insolens ex per. Meliore albucius perfecto no per. Ei fugit possit vivendo vix, at vidisse discere disputando eum. Id tation copiosae aliquando sea, te his appetere explicari.',
  },
  {
    id: 1,
    spkImg: avatar2,
    occupation: 'Team Lead',
    name: 'Mary Poppins',
    description:
      'Lorem ipsum dolor sit amet, qui no bonorum lucilius accusata, ei mel tollit partiendo, vis at facete mentitum inciderint. Ridens tritani insolens ex per. Meliore albucius perfecto no per. Ei fugit possit vivendo vix, at vidisse discere disputando eum. Id tation copiosae aliquando sea, te his appetere explicari.',
  },
  {
    id: 2,
    spkImg: avatar3,
    occupation: 'Software Developer',
    name: 'Anita Rajguru',
    description:
      'Lorem ipsum dolor sit amet, qui no bonorum lucilius accusata, ei mel tollit partiendo, vis at facete mentitum inciderint. Ridens tritani insolens ex per. Meliore albucius perfecto no per. Ei fugit possit vivendo vix, at vidisse discere disputando eum. Id tation copiosae aliquando sea, te his appetere explicari.',
  },
  {
    id: 3,
    spkImg: avatar4,
    occupation: 'Program Manager',
    name: 'Mark Florence',
    description:
      'Lorem ipsum dolor sit amet, qui no bonorum lucilius accusata, ei mel tollit partiendo, vis at facete mentitum inciderint. Ridens tritani insolens ex per. Meliore albucius perfecto no per. Ei fugit possit vivendo vix, at vidisse discere disputando eum. Id tation copiosae aliquando sea, te his appetere explicari.',
  },
  {
    id: 4,
    spkImg: avatar5,
    occupation: 'Quality Assurance speacialist',
    name: 'Antonia Belarus',
    description:
      'Lorem ipsum dolor sit amet, qui no bonorum lucilius accusata, ei mel tollit partiendo, vis at facete mentitum inciderint. Ridens tritani insolens ex per. Meliore albucius perfecto no per. Ei fugit possit vivendo vix, at vidisse discere disputando eum. Id tation copiosae aliquando sea, te his appetere explicari.',
  },
];

const SpeakerInfo = () => {
  const { id } = useParams();
  const speaker = SPEAKERS[parseInt(id)];
  return (
    <SpeakerInfoContainer>
      <div className='container p-5'>
        <div className='card'>
          <Avatar speakerImage={speaker.spkImg} />
          <h3>{speaker.name}</h3>
          <div className='card-body px-0'>
            <h4 className='card-title'>{speaker.occupation}</h4>
            <p>{speaker.description}</p>
            <Link to='/speakers'>
              <Button className='btn btn-primary text-uppercase'>
                Back to speakers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SpeakerInfoContainer>
  );
};

export default SpeakerInfo;

const SpeakerInfoContainer = styled.div`
  background: var(--deep-dark);

  .card {
    background: transparent;
    color: var(--white);
    border: 1px solid var(--dark-red);
    padding: 1rem;
    text-align: center;
  }
`;
