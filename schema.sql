create table users (
  id serial primary key,
  first_name varchar(20),
  middle_initial varchar(1),
  last_name varchar(40),
  email varchar(60),
  type varchar(20),
  user_id varchar(20)
  -- Searching by user I should see all assignments
  -- and memberships
)

create table products (
  id serial primary key,
  name varchar(50),
  sku varchar(100),
  version varchar(20),
  blueprint varchar(10),
  notes varchar(200)
)

create table licenses (
  id serial primary key,
  product_id integer references products(id),
  license varchar(500),
  -- valid_from,
  -- valid_to,
  quantity integer,
  -- A licensce will always be 1.
  notes varchar(200)
)

create table subscriptions (
  id serial primary key,
  product_id integer references products(id),
  subscription varchar(500),
  -- valid_from
  -- valid_to
  quantity integer,
  -- A subscription will always be > 1
  notes varchar(200)
)

create table assignments (
  id serial primary key,
  assignee integer references users(id),
  licensce integer references licenses(id)
  -- Only one user is assigned to a liscence
  -- Assigning a user should show that the available
  -- licenses is 0
)

create table memberships (
  id serial primary key,
  member integer references users(id),
  subscription integer references subscriptions(id)
  -- Many users are assigned to a subscriptions
  -- Assigning members decreases the available
  -- subscription count untill it reaches 0
)
