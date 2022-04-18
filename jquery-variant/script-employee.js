let Pulse = {
  username: 'user',
  password: 'pass',
  baseUrl: 'https://intra.proekspert.ee/pulse-johvi',
  headers: {'Content-Type': 'application/json'},

  skillItemTemplate: '<div class="MuiChip-root jss1609 MuiChip-outlined jss1610" id="{skill}">' +
      '  <p class="MuiTypography-root MuiTypography-body1" style="font-weight:600;font-size:14px;line-height:unset">' +
      '    <span class="MuiChip-label">{skill}</span>' +
      '  </p>' +
      '</div>',

  init: function () {
      Pulse.auth.getToken();
  },

  auth: {
      addAuthHeader: function (token) {
          Pulse.headers['Authorization'] = 'Bearer ' + token;
      },

      getToken: function () {
          $.ajax({
              url: Pulse.baseUrl + '/auth',
              data: JSON.stringify({
                  username: Pulse.username,
                  password: Pulse.password
              }),
              headers: Pulse.headers,
              method: 'post',
              success: function (data) {
                  Pulse.auth.addAuthHeader(data.token);
              }
          })
      }
  },

  employees: {
      populateEmployeeSkills: function (employeeId) {
          let $techList = $('div#skills');
          $techList.empty();
          $.ajax({
              url: Pulse.baseUrl + '/api/employees/' + employeeId,
              headers: Pulse.headers,
              method: 'get',
              success: function (data) {
                  console.log(data.skills)
                  data.skills
                      .forEach((skill) => $techList.append(Pulse.projects.buildSkill(skills)))
              }
          });
      },

      cleanSkills: function () {
      },

      buildSkill: function (skill) {
          return Pulse.skillTemplate.replaceAll('{skill}', skill);
      }
  }
}

$(document).ready(Pulse.init);
