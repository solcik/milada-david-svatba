import React, { useState } from 'react';
import 'lazysizes';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import Photo from '../components/Photo';
import photos, { getPhoto } from '../lib/photos';

const getThumbBoundsFn = (index: number) => {
  const photo = photos[index];
  const img = window.document.getElementById(photo.id);
  const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
  const rect = img.getBoundingClientRect();
  return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
};

export default function Home(): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const [options, setOptions] = useState({
    getThumbBoundsFn,
    showHideOpacity: true,
    index: 0,
  });

  const showGallery = (index: number): void => {
    setOpen(true);
    setOptions({ ...options, index });
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Layout>
      <h1 className="mb-2 md:mb-4">Milada & David</h1>

      <div className="flex flex-row">
        <div className="hidden md:w-1/6 md:flex flex-col space-y-4 mr-4">
          <Photo photo={getPhoto('2011-11-11')} showGallery={showGallery} />
          <Photo photo={getPhoto('2011-12-10')} showGallery={showGallery} />
          <Photo photo={getPhoto('2012-02-09')} showGallery={showGallery} />
          <Photo photo={getPhoto('2013-02-22')} showGallery={showGallery} />
          <Photo photo={getPhoto('2013-09-12')} showGallery={showGallery} />
          <Photo photo={getPhoto('2015-02-14')} showGallery={showGallery} lazy />
          <Photo photo={getPhoto('2015-07-19')} showGallery={showGallery} lazy />
          <Photo photo={getPhoto('2015-12-04')} showGallery={showGallery} lazy />
          <Photo photo={getPhoto('2015-12-26')} showGallery={showGallery} lazy />
          <Photo photo={getPhoto('2016-03-09')} showGallery={showGallery} lazy />
          <Photo photo={getPhoto('2018-09-27')} showGallery={showGallery} lazy />
          <Photo photo={getPhoto('2019-05-30')} showGallery={showGallery} lazy />
        </div>

        <div className="w-full md:w-4/6 mx-4">
          <section>
            <div className="flex flex-column justify-around items-center space-x-4 mb-4">
              <Photo
                photo={getPhoto('2019-12-23')}
                showGallery={showGallery}
                title="Najdi prstýnek!"
              />
              <Photo photo={getPhoto('2020-02-22')} showGallery={showGallery} />
            </div>

            <h2>Kdy?</h2>
            <p>
              Rádi bychom Vás pozvali na&nbsp;naši svatbu, která se bude konat 11.&nbsp;7.&nbsp;2020
              v&nbsp;10:30 <a href="#kde">na&nbsp;myslivecké chatě Bažantnice ve&nbsp;Varnsdorfu</a>
              . Obřad i&nbsp;vše ostatní bude probíhat přímo na&nbsp;místě. Před obřadem pro Vás
              bude připraveno drobné občerstvení včetně kávičky a budou se rozdávat myrty. Necháme
              tedy na Vás, s&nbsp;jakým časovým předstihem dorazíte, abyste to všechno stihli.
            </p>
          </section>
          <section>
            <h2>Co a jak?</h2>
            <p>
              Oblečte se na naši svatbu, jak je Vám pohodlné, ale chtěli bychom Vás upozornit, že se
              drtivá část celého dne bude odehrávat venku na louce a proto nezapomeňte na vhodnou
              obuv.
            </p>
            <p>
              Na chatě není bohužel možnost ubytování. Ti, kteří s námi budou chtít zůstat do neděle
              (to preferujeme), si mohou na rozlehlé louce postavit stan (kdykoliv ve volné chvíli -
              například během focení).
            </p>
            <p>
              Vzhledem k tomu, že dopředu nevíme, jaké bude počasí, doporučujeme si s sebou vzít na
              večer deku, případně polštářek pod zadek na lavičky.
            </p>
            <p>Jste zváni na celou svatbu - od obřadu, svatebního oběda, až po večerní raut.</p>
            <p>
              Dejte nám prosím vědět, pokud máte potravinové alergie či preferujete vegetariánské
              jídlo.
            </p>
            <h2>Dary?</h2>
            <p>
              Naši domácnost máme již plně vybavenou a pokud nám s něčím chcete udělat radost, rádi
              od Vás přijmeme finanční dar na nějaký zážitek.
            </p>
          </section>
          <section id="harmonogram">
            <h2>Harmonogram</h2>
            <dl className="flex flex-row flex-wrap text-xl md:text-2xl">
              <dt className="w-1/2 text-right pr-4">09:30 - 10:00</dt>
              <dd className="w-1/2 pl-4">Příjezd</dd>

              <dt className="w-1/2 text-right pr-4">10:30</dt>
              <dd className="w-1/2 pl-4">Obřad</dd>

              <dt className="w-1/2 text-right pr-4">11:00</dt>
              <dd className="w-1/2 pl-4">Skupinové focení</dd>

              <dt className="w-1/2 text-right pr-4">12:00</dt>
              <dd className="w-1/2 pl-4">Oběd</dd>

              <dt className="w-1/2 text-right pr-4">14:30</dt>
              <dd className="w-1/2 pl-4">Sladké mámení</dd>

              <dt className="w-1/2 text-right pr-4">15:00</dt>
              <dd className="w-1/2 pl-4">Markétky zpěv</dd>

              <dt className="w-1/2 text-right pr-4">16:00</dt>
              <dd className="w-1/2 pl-4">Hry</dd>

              <dt className="w-1/2 text-right pr-4">17:00</dt>
              <dd className="w-1/2 pl-4">Tanec novomanželů</dd>

              <dt className="w-1/2 text-right pr-4">19:00 - 24:00</dt>
              <dd className="w-1/2 pl-4">Kapela</dd>

              <dt className="w-1/2 text-right pr-4">20:00 - 20:30</dt>
              <dd className="w-1/2 pl-4">Focení Milady & Davida</dd>

              <dt className="w-1/2 text-right pr-4">21:00</dt>
              <dd className="w-1/2 pl-4">Házení kytice (jediná tradice!)</dd>

              <dt className="w-1/2 text-right pr-4">21:00{' -->'}</dt>
              <dd className="w-1/2 pl-4">Večerní zábava</dd>
            </dl>
          </section>

          <section id="kde">
            <h2>Kde se to vše koná?</h2>

            <div className="text-center mb-4">
              <span className="text-2xl">
                <strong>myslivecká chata Bažantnice</strong>
              </span>
            </div>

            <div className="flex flex-column justify-around space-x-4 mb-4 h-48">
              <Photo photo={getPhoto('bazantnice_dole')} showGallery={showGallery} lazy />
              <Photo photo={getPhoto('bazantnice_horejskek')} showGallery={showGallery} lazy />
            </div>

            <div className="h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35513.912742885004!2d14.57729018650837!3d50.904488030137905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709111d3750aefb%3A0xfbc70d825c6ec523!2sKarlova%202363%2C%20407%2047%20Varnsdorf!5e1!3m2!1scs!2scz!4v1591549876645!5m2!1scs!2scz"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                title="Mapa"
              />
            </div>
          </section>

          <section>
            <h2>Vaše účast</h2>
            <p className="text-center">Prosím potvrďte nám Vaši účast!</p>
          </section>

          <section>
            <h2>P.S.</h2>
            <p className="text-center">Na fotky jde kliknout, otevře se Vám galerie!</p>
          </section>

          <section id="galerie" className="block md:hidden">
            <h2>Galerie</h2>
            <div
              id="thumbnails"
              className="flex flex-row flex-wrap justify-around space-x-4 space-y-4"
            >
              {photos.map((photo) => (
                <Photo key={photo.id} photo={photo} showGallery={showGallery} lazy />
              ))}
            </div>
          </section>
        </div>

        <div className="hidden md:w-1/6 md:flex flex-col space-y-4 ml-4">
          <Photo photo={getPhoto('2012-02-05')} showGallery={showGallery} />
          <Photo photo={getPhoto('2012-02-06')} showGallery={showGallery} />
          <Photo photo={getPhoto('2012-02-11')} showGallery={showGallery} />
          <Photo photo={getPhoto('2014-01-09')} showGallery={showGallery} />
          <Photo photo={getPhoto('2014-12-20')} showGallery={showGallery} />
          <Photo photo={getPhoto('2015-07-09')} showGallery={showGallery} lazy />
          <Photo photo={getPhoto('2015-07-27')} showGallery={showGallery} lazy />
          <Photo photo={getPhoto('2015-12-11')} showGallery={showGallery} lazy />
          <Photo photo={getPhoto('2016-02-06')} showGallery={showGallery} lazy />
          <Photo photo={getPhoto('2018-09-26')} showGallery={showGallery} lazy />
          <Photo photo={getPhoto('2019-03-15')} showGallery={showGallery} lazy />
          <Photo photo={getPhoto('2019-09-21')} showGallery={showGallery} lazy />
        </div>
      </div>

      <Gallery isOpen={isOpen} items={photos} onClose={handleClose} options={options} />
    </Layout>
  );
}
