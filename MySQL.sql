create schema news_site collate utf8mb4_general_ci;
create table news_site.news
(
    id          int auto_increment,
    title       VARCHAR(150) not null,
    description TEXT         not null,
    image       BLOB         null,
    date        DATETIME     not null,
    constraint news_pk
        primary key (id)
);
create table news_site.comments
(
    id      int auto_increment,
    news_id int          not null,
    author  VARCHAR(150) null,
    text    TEXT         not null,
    constraint comments_pk
        primary key (id),
    constraint comments_news_id_fk
        foreign key (news_id) references news (id)
            on update cascade on delete cascade
);

INSERT INTO news_site.news
    (id, title, description, date)
VALUES
    (1, 'Weather', 'cold and windy', '2024-02-03 10:47:47'),
    (2, 'vacation', 'New Year''s weekend', '2024-02-03 11:47:47');

SELECT * FROM news_site.news;

INSERT INTO news_site.comments
    (id, news_id, author, text)
VALUES
    (1, 1, 'Sun', 'There was some snow this winter'),
    (2, 2, 'Naksu', 'This and next years will be special');

SELECT * FROM news_site.comments;
