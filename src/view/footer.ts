
export const createFooter = () => {
  const footer = document.createElement('footer');

  const gitHubLink = document.createElement('a');
  gitHubLink.textContent = 'GitHub';
  gitHubLink.href = 'https://github.com/timashoff';

  const year = document.createElement('p');
  year.textContent = new Date().getFullYear().toString();

  const rsSchoolLink = document.createElement('a');
  rsSchoolLink.textContent = 'RS School';
  rsSchoolLink.href = 'https://rs.school/js/';

  footer.append(gitHubLink, year, rsSchoolLink);
  return footer;
};